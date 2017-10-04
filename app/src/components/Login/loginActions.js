import request from 'superagent-defaults';
import { API, LOGIN_SUCCESS, LOGIN_FAILURE } from './../../helper/constants';

export const loginUserSuccess = message => {
  return {
    type: LOGIN_SUCCESS,
    isValidDataInput: true,
    message
  };
};

export const loginUserFailure = message => {
  return {
    type: LOGIN_FAILURE,
    isValidDataInput: false,
    message
  };
};

export const loginUser = (email, password) => {
  let id;
  let isActivated;
  return dispatch => request()
    .post(`${API.URL}/login`)
    .send({email, password})
    .end((err, res) => {
      (err || !res.ok) &&
      dispatch(loginUserFailure(JSON.parse(res.text).message)) ||
      dispatch(loginUserSuccess(JSON.parse(res.text).message));
    });
};
