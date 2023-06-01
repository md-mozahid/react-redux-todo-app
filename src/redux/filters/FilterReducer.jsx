import { COLOR_CHANGE, STATUS_CHANGE } from './ActionTypes'
import initialState from './InitialState'

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGE:
      return {
        ...state,
        status: action.payload,
      }
    case COLOR_CHANGE:
      const { color, changeType } = action.payload
      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [...state.colors.color],
          }
        case 'removed':
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          }
        default:
          return state
      }

    default:
      return state
  }
}
export default FilterReducer
