import { GET_MY_PROPOSALS_FAILURE,
  GET_MY_PROPOSALS_SUCCESS } from './../../helper/constants';

const getMyProposalsList = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_PROPOSALS_SUCCESS:
      return {
        proposalsMy: action.proposalsMy
      };
    default:
      return state;
  }
};

export default getMyProposalsList;
