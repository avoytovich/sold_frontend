import { browserHistory } from 'react-router';
import { API, LOGIN_SUCCESS, LOGIN_FAILURE, CHECK_TOKEN,
  LOGOUT_USER } from './../../helper/constants';
import { request } from './../../helper/request';

export const loginUserSuccess = (message, token) => {
  sessionStorage.setItem('token', token);
  browserHistory.push('/dashboard');
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

export const checkToken = () => ({
  type: CHECK_TOKEN,
  isAuth: !!sessionStorage.getItem('token')
});

export const logOut = () => {
  sessionStorage.clear();
  browserHistory.push('/');
  return {
    type: LOGOUT_USER,
    message: 'You are signed out!'
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
      dispatch(loginUserSuccess(JSON.parse(res.text).message, JSON.parse(res.text).token));
    });
};
