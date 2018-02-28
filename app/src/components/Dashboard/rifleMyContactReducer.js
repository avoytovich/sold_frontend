import { RIFLE_MY_CONTACT_FAILURE,
  RIFLE_MY_CONTACT_SUCCESS } from './../../helper/constants';

const rifleMyContact = (state = {}, action) => {
  switch (action.type) {
    case RIFLE_MY_CONTACT_SUCCESS:
      return {
        message: action.message
      };
    default:
      return state;
  }
};

export default rifleMyContact;
