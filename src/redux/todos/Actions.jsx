import { ADD_TODOS, DELETE_TODOS } from './ActionTypes'

export const addTodos = (value) => {
  return {
    type: ADD_TODOS,
    payload: value,
  }
}
export const deleteTodos = (todoId) => {
  return {
    type: DELETE_TODOS,
    payload: todoId,
  }
}
