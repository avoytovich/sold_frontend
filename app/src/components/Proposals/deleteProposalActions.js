import { API, DELETE_PROPOSAL_SUCCESS,
    DELETE_PROPOSAL_FAILURE } from './../../helper/constants';
import { request } from './../../helper/request';

export const deleteProposalSuccess = message => {
  return {
    type: DELETE_PROPOSAL_SUCCESS,
    message
  };
};

export const deleteProposalFailure = message => {
  return {
    type: DELETE_PROPOSAL_FAILURE,
    message
  };
};

export const deleteProposal = (title) => {
  return dispatch => request()
    .delete(`${API.URL}/proposals/list/${title}`)
    .end((err, res) => {
      (err || !res.ok) &&
        dispatch(deleteProposalFailure(JSON.parse(res.text).message)) ||
          dispatch(deleteProposalSuccess(JSON.parse(res.text).message));
    });
};
