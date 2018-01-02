import { UPLOAD_FILE_SUCCESS } from './../../helper/constants';

const upload = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        url: action.url
      };
    default:
      return state;
  }
};

export default upload;
