import { API, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './../../helper/constants';
import { request } from './../../helper/request';

export const signUpSuccess = (message) => {
  return {
    type: SIGNUP_SUCCESS,
    message
  };
};

export const signUpFailure = (message) => {
  return {
    type: SIGNUP_FAILURE,
    message
  };
};

export const signUp = (email, password, name) => {
  return dispatch => request()
    .post(`${API.URL}/user`)
    .send({email, password, name})
    .end((err, res) => {
      (err || !res.ok) &&
        dispatch(signUpFailure(JSON.parse(res.text).message)) ||
          dispatch(signUpSuccess(JSON.parse(res.text).message));
    });
};
