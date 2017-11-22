import { ADD_PROPOSALS_FAILURE, ADD_PROPOSALS_SUCCESS } from './../../helper/constants';

const proposals = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROPOSALS_SUCCESS:
      return {
        ...state,
        message: action.message
      };
    case ADD_PROPOSALS_FAILURE:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};

export default proposals;
