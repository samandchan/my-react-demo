import { NUM_ADD, NUM_INIT, NUM_SUB } from '../actionTypes';
import Axios from 'axios';


/**
 * 
 * 数量增加 action
 */

export const numAdd = () => {
  return {
    type: NUM_ADD,
    value: 1
  }
}

/**
 * 
 * 数量初始化 异步 action
 */
export const numINIT = () => {
  return (dispatch) => {
    Axios.get("https://easy-mock.com/mock/5cff5f447806440acf2c6856/baseList/")
    .then((res) => {
      console.log(res);
      dispatch({
        type: NUM_INIT,
        value: res.data.nums
      })
    })
  }
}

/**
 * 
 * 数量减少
 */
export const numSUB =  () => {
  return {
    type: NUM_SUB,
    value: -1
  }
}