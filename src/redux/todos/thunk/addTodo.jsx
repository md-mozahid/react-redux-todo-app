import { addTodos } from '../Actions'

const addTodo = (todoTitle) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:9000/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: todoTitle,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset = UTF-8,', // if bangle text, the will show correctly
      },
    })
    const todo = await response.json()

    dispatch(addTodos(todo.title)) // todo received the text only
  }
}

export default addTodo
