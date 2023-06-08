import { useState } from 'react'
import { useDispatch } from 'react-redux'
import imgTick from '../assets/images/double-tick.png'
import imgNotes from '../assets/images/notes.png'
import imgPlus from '../assets/images/plus.png'
import { allCompleted, clearCompleted } from '../redux/todos/Actions'
import addTodo from '../redux/todos/thunk/addTodo'

const Header = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input)) // redux thunk call him self
    setInput('')
  }

  const completeHandler = () => {
    dispatch(allCompleted())
  }
  const clearHandler = () => {
    dispatch(clearCompleted())
  }

  return (
    <>
      <div>
        <form
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
          onSubmit={handleSubmit}>
          <img src={imgNotes} className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            value={input}
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url('${imgPlus}')] bg-no-repeat bg-contain`}>
            Add
          </button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="flex space-x-1 cursor-pointer">
            <img className="w-4 h-4" src={imgTick} alt="Complete" />
            <span onClick={completeHandler}>Complete All Tasks</span>
          </li>
          <li className="cursor-pointer" onClick={clearHandler}>
            Clear completed
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
