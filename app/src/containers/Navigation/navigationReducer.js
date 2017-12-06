import { GET_USER_SUCCESS, GET_USER_FAILURE } from './../../helper/constants';

const getUserName = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_FAILURE:
      return {
        error: action.error
      };
    case GET_USER_SUCCESS:
      return {
        name: action.name
      };
    default:
      return state;
  }
};

export default getUserName;
