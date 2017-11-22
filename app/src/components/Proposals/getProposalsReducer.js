import { GET_PROPOSALS_LIST_FAILURE,
  GET_PROPOSALS_LIST_SUCCESS } from './../../helper/constants';

const proposalsList = (state = {}, action) => {
  switch (action.type) {
    case GET_PROPOSALS_LIST_FAILURE:
      return {
        error: action.error
      };
    case GET_PROPOSALS_LIST_SUCCESS:
      return {
        proposals: action.proposals
      };
    default:
      return state;
  }
};

export default proposalsList;
