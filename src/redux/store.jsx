import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import FilterReducer from './filters/FilterReducer'
import TodoReducer from './todos/TodoReducer'

const store = createStore(
  combineReducers({
    todos: TodoReducer,
    filters: FilterReducer,
  }),
  composeWithDevTools()
)

export default store
