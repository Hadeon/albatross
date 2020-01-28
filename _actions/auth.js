import { SET_ACCESS_TOKEN } from '../constants';

export function setAccessToken(key){
  return {
    type: SET_ACCESS_TOKEN,
    payload: key
  }
}