import { useState } from 'react'
import { useDispatch } from 'react-redux'
import imgTick from '../assets/images/double-tick.png'
import imgNotes from '../assets/images/notes.png'
// import imgPlus from '../assets/images/plus.png'
import { addTodos } from '../redux/todos/Actions'

const Header = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    setTitle((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodos(title))
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
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain">
            Add
          </button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="flex space-x-1 cursor-pointer">
            <img className="w-4 h-4" src={imgTick} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li className="cursor-pointer">Clear completed</li>
        </ul>
      </div>
    </>
  )
}

export default Header
