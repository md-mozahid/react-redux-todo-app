import {
  ADD_TODOS,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETE_TODOS,
  LOADED,
  TOGGLED,
} from './ActionTypes'

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  }
}
export const addTodos = (todoTitle) => {
  return {
    type: ADD_TODOS,
    payload: todoTitle,
  }
}

export const deleteTodos = (todoId) => {
  return {
    type: DELETE_TODOS,
    payload: todoId,
  }
}

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  }
}

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: { todoId, color },
  }
}

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  }
}
