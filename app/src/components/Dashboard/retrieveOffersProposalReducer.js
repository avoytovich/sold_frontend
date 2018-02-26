import { GET_MY_OFFERS_PROPOSAL_FAILURE,
  GET_MY_OFFERS_PROPOSAL_SUCCESS} from './../../helper/constants';

const getMyOffersByProposalList = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_OFFERS_PROPOSAL_SUCCESS:
      return {
        myOffersByProposal: action.offersByProposal
      };
    default:
      return state;
  }
};

export default getMyOffersByProposalList;
