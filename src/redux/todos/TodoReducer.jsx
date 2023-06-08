import {
  ADD_TODOS,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETE_TODOS,
  LOADED,
  TOGGLED,
} from './ActionTypes'
import initialState from './InitialState'

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload

    case ADD_TODOS:
      return [
        ...state,
        {
          id: nextTodoId(state),
          title: action.payload,
          completed: false,
        },
      ]

    case DELETE_TODOS:
      return state.filter((todo) => todo.id !== action.payload)

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })

    case COLOR_SELECTED:
      const { todoId, color } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }
        return {
          ...todo,
          color: color,
        }
      })

    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        }
      })

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed)

    default:
      return state
  }
}
export default TodoReducer
