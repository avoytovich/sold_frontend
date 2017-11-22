import { API, GET_PROPOSALS_LIST_FAILURE,
  GET_PROPOSALS_LIST_SUCCESS } from './../../helper/constants';
import { request } from './../../helper/request';

export const getProposalsListFailure = error => {
  return {
    type: GET_PROPOSALS_LIST_FAILURE,
    error
  };
};

export const getProposalsListSuccess = proposals => {
  return {
    type: GET_PROPOSALS_LIST_SUCCESS,
    proposals
  };
};

export const getProposalsList = () => {
  return dispatch => request()
    .get(`${API.URL}/proposals/list`)
    .end((err, res) => {
      (err || !res.ok) &&
        dispatch(getProposalsListFailure(JSON.parse(res.error))) ||
          dispatch(getProposalsListSuccess(JSON.parse(res.text)));
    });
};
