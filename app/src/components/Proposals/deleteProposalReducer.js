import { DELETE_PROPOSAL_SUCCESS,
    DELETE_PROPOSAL_FAILURE } from './../../helper/constants';

const deleteProposal = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROPOSAL_SUCCESS:
      return {
        deleteProposal: action.message
      };
    case DELETE_PROPOSAL_FAILURE:
      return {
        deleteProposal: action.message
      };
    default:
      return state;
  }
};

export default deleteProposal;
