import { API, ADD_PROPOSALS_FAILURE, ADD_PROPOSALS_SUCCESS } from './../../helper/constants';
import { request } from './../../helper/request';

export const addProposalsFailure = message => {
  return {
    type: ADD_PROPOSALS_FAILURE,
    message
  };
};

export const addProposalsSuccess = message => {
  return {
    type: ADD_PROPOSALS_SUCCESS,
    message
  };
};

export const addProposals = (title) => {
  return dispatch => request()
    .post(`${API.URL}/proposals`)
    .send({title})
    .end((err, res) => {
      (err || !res.ok) &&
        dispatch(addProposalsFailure(JSON.parse(res.text).message)) ||
          dispatch(addProposalsSuccess(JSON.parse(res.text).message));
    });
};
