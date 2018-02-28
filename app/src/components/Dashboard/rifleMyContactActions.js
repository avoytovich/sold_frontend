import { request } from './../../helper/request';
import { API, RIFLE_MY_CONTACT_FAILURE,
  RIFLE_MY_CONTACT_SUCCESS } from './../../helper/constants';

export const rifleMyContactFailure = error => {
  return {
    type: RIFLE_MY_CONTACT_FAILURE,
    error
  };
};

export const rifleMyContactSuccess = message => {
  return {
    type: RIFLE_MY_CONTACT_SUCCESS,
    message
  };
};

export const rifleMyContact = (title, contact) => {
  return dispatch => request()
    .post(`${API.URL}/offers/reply/contact`)
    .send({title, contact})
    .end((err, res) => {
      (err || !res.ok) &&
      dispatch(rifleMyContactFailure(JSON.parse(res.text).message)) ||
      dispatch(rifleMyContactSuccess(JSON.parse(res.text)));
    });
};
