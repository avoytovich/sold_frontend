import { request } from './../../helper/request';
import { API, GET_MY_OFFERS_PROPOSAL_FAILURE,
  GET_MY_OFFERS_PROPOSAL_SUCCESS } from './../../helper/constants';

export const getMyOffersProposalFailure = (error) => {
  return {
    type: GET_MY_OFFERS_PROPOSAL_FAILURE,
    error
  };
};

export const getMyOffersProposalSuccess = (res) => {
  return {
    type: GET_MY_OFFERS_PROPOSAL_SUCCESS,
    offersByProposal: res
  };
};

export const getMyOffersProposal = (title) => {
  return dispatch => request()
  .post(`${API.URL}/offers/list/retrieve`)
  .send({title})
  .end((err, res) => {
    (err || !res.ok) &&
    dispatch(getMyOffersProposalFailure(JSON.parse(res.text).message)) ||
    dispatch(getMyOffersProposalSuccess(JSON.parse(res.text)));
  });
};
