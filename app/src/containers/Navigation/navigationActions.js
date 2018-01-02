import { API, GET_USER_SUCCESS, GET_USER_FAILURE } from './../../helper/constants';
import { request } from './../../helper/request';

export const getUserFailure = error => {
  return {
    type: GET_USER_FAILURE,
    error
  };
};

export const getUserSuccess = profile => {
  return {
    type: GET_USER_SUCCESS,
    profile
  };
};

export const getUser = () => {
  return dispatch => request()
    .get(`${API.URL}/user`)
    .end((err, res) => {
      (err || !res.ok) &&
        dispatch(getUserFailure(JSON.parse(res.error))) ||
          dispatch(getUserSuccess(JSON.parse(res.text).profile));
    });
};
