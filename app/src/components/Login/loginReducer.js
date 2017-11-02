import { LOGIN_SUCCESS, LOGIN_FAILURE, CHECK_TOKEN } from './../../helper/constants';

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
    case CHECK_TOKEN:
      return {
        ...state,
        isAuth: action.isAuth
      };
    default:
      return state;
  }
};

export default login;
