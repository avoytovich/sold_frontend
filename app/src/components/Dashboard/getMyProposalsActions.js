import { request } from './../../helper/request';
import { API, GET_MY_PROPOSALS_FAILURE,
  GET_MY_PROPOSALS_SUCCESS } from './../../helper/constants';

export const getMyProposalsFailure = (error) => {
  return {
    type: GET_MY_PROPOSALS_FAILURE,
    error
  };
};

export const getMyProposalsSuccess = res => {
  return {
    type: GET_MY_PROPOSALS_SUCCESS,
    proposalsMy: res
  };
};

export const getMyProposals = () => {
  return dispatch => request()
    .get(`${API.URL}/proposals/retrieve`)
    .end((err, res) => {
      (err || !res.ok) &&
        dispatch(getMyProposalsFailure(JSON.parse(res.error))) ||
          dispatch(getMyProposalsSuccess(JSON.parse(res.text)));
    });
};
