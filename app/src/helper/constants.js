const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const CHECK_TOKEN = 'CHECK_TOKEN';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const ADD_PROPOSALS_FAILURE = 'ADD_PROPOSALS_FAILURE';
const ADD_PROPOSALS_SUCCESS = 'ADD_PROPOSALS_SUCCESS';
const GET_PROPOSALS_LIST_FAILURE = 'GET_PROPOSALS_LIST_FAILURE';
const GET_PROPOSALS_LIST_SUCCESS = 'GET_PROPOSALS_LIST_SUCCESS';
const SEND_OFFER_FAILURE = 'SENT_OFFER_FAILURE';
const SEND_OFFER_SUCCESS = 'SENT_OFFER_SUCCESS';
const DELETE_PROPOSAL_SUCCESS = 'DELETE_PROPOSAL_SUCCESS';
const DELETE_PROPOSAL_FAILURE = 'DELETE_PROPOSAL_FAILURE';

const API = {
  HOST: 'http://localhost:',
  PORT: '8033'
};

API.URL = API.HOST + API.PORT;

export { API, LOGIN_SUCCESS, LOGIN_FAILURE, CHECK_TOKEN, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  ADD_PROPOSALS_FAILURE, ADD_PROPOSALS_SUCCESS, GET_PROPOSALS_LIST_FAILURE,
    GET_PROPOSALS_LIST_SUCCESS, SEND_OFFER_FAILURE, SEND_OFFER_SUCCESS,
      DELETE_PROPOSAL_SUCCESS, DELETE_PROPOSAL_FAILURE };
