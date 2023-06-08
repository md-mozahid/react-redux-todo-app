import { combineReducers } from 'redux'
import FilterReducer from './filters/FilterReducer'
import TodoReducer from './todos/TodoReducer'

const rootReducer = combineReducers({
  todos: TodoReducer,
  filters: FilterReducer,
})

export default rootReducer
