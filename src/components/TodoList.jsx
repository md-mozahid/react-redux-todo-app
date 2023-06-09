import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const filters = useSelector((state) => state.filters)

  const filteredByStatus = (todo) => {
    const { status } = filters
    switch (status) {
      case 'Complete':
        return todo.completed

      case 'Incomplete':
        return !todo.completed
      default:
        return true
    }
  }

  const filteredByColors = (todo) => {
    const { colors } = filters
    if (colors.length > 0) {
      return colors.includes(todo.color)
    } else {
      return true
    }
  }

  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          .filter(filteredByStatus)
          .filter(filteredByColors)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
    </>
  )
}

export default TodoList
