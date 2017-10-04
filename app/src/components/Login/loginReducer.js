import { LOGIN_SUCCESS, LOGIN_FAILURE } from './../../helper/constants';

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isValidDataInput: action.isValidDataInput,
        message: action.message
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isValidDataInput: action.isValidDataInput,
        message: action.message
      };
    default:
      return state;
  }
};

export default login;
