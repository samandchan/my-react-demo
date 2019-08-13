import { NUM_ADD, NUM_INIT, NUM_SUB } from '../actionTypes';


const defaultState = {
  num: 1001
}

export default (state=defaultState, action) => {
  if(action.type === NUM_ADD || action.type === NUM_SUB) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.num += action.value
    return newState
  }
  if(action.type === NUM_INIT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.num = action.value
    return newState
  }
  return state
};
