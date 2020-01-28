import { SET_ACCESS_TOKEN } from '../constants';

const initialState = {
  accessToken: ''
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload
      };
    default:
      return state;
  }
}

export default authReducer;