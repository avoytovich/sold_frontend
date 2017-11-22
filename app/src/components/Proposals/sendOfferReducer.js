import { SEND_OFFER_FAILURE, SEND_OFFER_SUCCESS } from './../../helper/constants';

const offerSend = (state = {}, action) => {
  switch (action.type) {
    case SEND_OFFER_FAILURE:
      return {
        error: action.error
      };
    case SEND_OFFER_SUCCESS:
      return {
        offerSend: action.message
      };
    default:
      return state;
  }
};

export default offerSend;
