import { LOGIN_SUCCESS, LOGIN_FAILURE } from './../../helper/constants';

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        id: action.id,
        isActivated: action.isActivated
      };
    case LOGIN_FAILURE:
      return {
        message: action.message
      };
    default:
      return state;
  }
};

export default login;
