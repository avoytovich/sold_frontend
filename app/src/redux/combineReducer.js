import { combineReducers } from 'redux';
import login from './../components/Login/loginReducer';
import signUp from './../components/SignUp/signupReducer';
import proposals from './../components/Proposals/proposalsReducer';
import proposalsList from './../components/Proposals/getProposalsReducer';
import offerSend from './../components/Proposals/sendOfferReducer';
import deleteProposal from './../components/Proposals/deleteProposalReducer';

export default combineReducers({
  login,
  signUp,
  proposals,
  proposalsList,
  offerSend,
  deleteProposal
});
