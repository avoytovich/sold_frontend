const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const CHECK_TOKEN = 'CHECK_TOKEN';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const API = {
  HOST: 'http://localhost:',
  PORT: '8033'
};

API.URL = API.HOST + API.PORT;

export { API, LOGIN_SUCCESS, LOGIN_FAILURE, CHECK_TOKEN, SIGNUP_SUCCESS, SIGNUP_FAILURE };
