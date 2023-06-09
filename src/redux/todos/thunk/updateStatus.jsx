import { toggled } from '../Actions'

const updateStatus = (todoId, currStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !currStatus,
      }),
      headers: {
        'Content-type': 'application/json; charset = UTF-8,', // if bangle text, the will show correctly
      },
    })
    const todo = await response.json()

    dispatch(toggled(todo.id)) // server id
  }
}

export default updateStatus
