import { combineReducers } from 'redux';
import login from './../components/Login/loginReducer';
import signUp from './../components/SignUp/signupReducer';

export default combineReducers({
  login,
  signUp
});
