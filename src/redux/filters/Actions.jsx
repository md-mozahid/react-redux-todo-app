import { COLOR_CHANGE, STATUS_CHANGE } from './ActionTypes'

export const colorChange = (color, changeType) => {
  return {
    type: COLOR_CHANGE,
    payload: {
      color,
      changeType,
    },
  }
}

export const statusChange = (status) => {
  return {
    type: STATUS_CHANGE,
    payload: status,
  }
}
