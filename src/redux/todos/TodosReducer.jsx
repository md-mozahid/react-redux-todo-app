import { ADD_TODOS, DELETE_TODOS } from './ActionTypes'

const initialState = {
  todos: [],
}

let nextId = 1

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextId++,
            ...action.payload,
          },
        ],
      }
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}
export default TodosReducer
