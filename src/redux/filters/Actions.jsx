import { COLOR_CHANGE, STATUS_CHANGE } from './ActionTypes'

export const colorChange = (color, changType) => {
  return {
    type: COLOR_CHANGE,
    payload: {
      color,
      changType,
    },
  }
}

export const statusChange = (status) => {
  return {
    type: STATUS_CHANGE,
    payload: status,
  }
}
