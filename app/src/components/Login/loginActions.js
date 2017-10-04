import request from 'superagent-defaults';
import { API, LOGIN_SUCCESS, LOGIN_FAILURE } from './../../helper/constants';

export const loginUserSuccess = (id, isActivated) => {
  return {
    type: LOGIN_SUCCESS,
    id,
    isActivated
  };
};

export const loginUserFailure = message => {
  return {
    type: LOGIN_FAILURE,
    message
  };
};

export const loginUser = (email, password) => {
  let id;
  let isActivated;
  return dispatch => request()
    .post(`${API.URL}/user`)
    .send({email, password})
    .end((err, res) => {
      (err || !res.ok) &&
      dispatch(loginUserFailure(JSON.parse(res.text).message)) ||
      ({id, isActivated} = JSON.parse(res.text)) &&
      dispatch(loginUserSuccess(id, isActivated));
    });
};
