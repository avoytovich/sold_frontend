import { request } from './../../helper/request';
import { API, GET_MY_OFFERS_PROPOSAL_FAILURE,
  GET_MY_OFFERS_PROPOSAL_SUCCESS } from './../../helper/constants';

export const getMyOffersProposal = () => {
  return dispatch => request()
  .post()

}
