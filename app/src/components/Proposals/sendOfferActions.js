import { API, SEND_OFFER_FAILURE, SEND_OFFER_SUCCESS } from './../../helper/constants';
import { request } from './../../helper/request';

export const sendOfferFailure = error => {
  return {
    type: SEND_OFFER_FAILURE,
    error
  };
};

export const sendOfferSuccess = message => {
  return {
    type: SEND_OFFER_SUCCESS,
    message
  };
};

export const sendOffer = (title, offer) => {
  return dispatch => request()
  .post(`${API.URL}/offers/list/email`)
  .send({title, offer})
  .end((err, res) => {
    (err || !res.ok) &&
      dispatch(sendOfferFailure(JSON.parse(res.error))) ||
        dispatch(sendOfferSuccess(JSON.parse(res.text).message));
  });
};
