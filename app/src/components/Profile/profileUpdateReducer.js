import { UPDATE_PROFILE_SUCCESS } from './../../helper/constants';

const updateProfile = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return {
        profile: action.profile
      };
    default:
      return state;
  }
};

export default updateProfile;
