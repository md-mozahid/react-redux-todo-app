import { createStore } from 'redux'
import TodosReducer from './todos/TodosReducer'

const store = createStore(TodosReducer)

export default store
