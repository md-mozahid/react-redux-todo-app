import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './rootReducer'

const store = createStore(RootReducer, composeWithDevTools())

export default store
