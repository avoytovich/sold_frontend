import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './../../helper/constants';

const signUp = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.message
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};

export default signUp;
