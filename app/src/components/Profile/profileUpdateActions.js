import { request } from './../../helper/request';
import { API, UPDATE_PROFILE_SUCCESS } from './../../helper/constants';

const updateProfileSuccess = res => ({
    type: UPDATE_PROFILE_SUCCESS,
    profile: res
  });

export const updateProfile = (url, name, contact) => dispatch =>
  request()
    .put(`${API.URL}/profile`)
    .send({url, name, contact})
    .end((error, res) => {
      !error && dispatch(updateProfileSuccess(JSON.parse(res.text).profile));
    });
