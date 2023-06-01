import { createStore } from 'redux'
import TodoReducer from './todos/TodoReducer'

const store = createStore(TodoReducer)

export default store
