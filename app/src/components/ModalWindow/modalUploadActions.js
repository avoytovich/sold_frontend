import { request } from './../../helper/request';
import { API, UPLOAD_FILE_SUCCESS } from './../../helper/constants';

const uploadFileSuccess = res => ({
    type: UPLOAD_FILE_SUCCESS,
    url: res
  });

export const uploadFile = files => dispatch =>
  request()
    .post(`${API.URL}/upload`)
    .attach('fileToUpload', files[0])
    .end((error, res) => {
      !error && dispatch(uploadFileSuccess(res.text));
    });
