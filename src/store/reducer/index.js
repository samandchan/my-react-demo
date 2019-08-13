// import { NUM_ADD } from '../actionTypes';


// const defaultState = {
//   num: 1009
// }

// export default (state=defaultState, action) => {
//   // console.dir(action);
//   if(action.type === NUM_ADD) {
//     let newState = JSON.parse(JSON.stringify(state))
//     newState.num += action.value
//     return newState
//   }
//   return state
// };

import fruitReducer from './fruitReducer';
import { combineReducers } from 'redux';

export default combineReducers({fruitReducer})





