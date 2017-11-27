import React from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Form, Button} from 'react-bootstrap';
import './Proposals.css';
import { addProposals } from './proposalsActions.js';
import { getProposalsList } from './getProposalsActions.js';
import { deleteProposal } from './deleteProposalActions.js';
import { sendOffer } from './sendOfferActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { request } from './../../helper/request';
import { API } from './../../helper/constants';

export class Proposals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      offer: ''
    };
  }

  componentDidMount() {
    this.getProposalsList();
  }

  componentDidUpdate(prevProps, prevState) {
    prevProps.proposal.proposalsList.proposals ===
      this.props.proposal.proposalsList.proposals ?
    this.getProposalsList() : false;
    prevProps.proposal.deleteProposal.deleteProposal !==
      this.props.proposal.deleteProposal.deleteProposal ?
    this.getProposalsList() : false;
    prevProps.proposal.proposals.message !==
      this.props.proposal.proposals.message ?
    this.getProposalsList() : false;
  }

  handleChangeTitle = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  };

  addProposal = (e) => {
    e.preventDefault();
    this.props.addProposals(this.state.title);
  };

  getProposalsList = () => {
    this.props.getProposalsList();
  };

  handleChangeOffer = e => {
    e.preventDefault();
    this.setState({
      offer: e.target.value
    });
  };

  sendOfferProposal(title, offer) {
    this.props.sendOffer(title, this.state.offer);
    setTimeout(() => {
      this.refs[title].innerHTML = this.props.proposal.offerSend.offerSend;
    }, 2000);
  };

  deleteProposal(title) {
    this.props.deleteProposal(title);
    setTimeout(() => {
      if (this.refs[title]) {
        this.refs[title].innerHTML = this.props.proposal.deleteProposal.deleteProposal;
      }
    }, 2000);
  };

  render() {
    const { proposals } = this.props.proposal.proposalsList;

    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={12} md={12}>
            <Form horizontal>
              <FormGroup>
                <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
                <FormControl
                  className='input_proposals'
                  componentClass='textarea'
                  placeholder='add your proposal...'
                  rows='3'
                  onChange={this.handleChangeTitle}
                />
                <Button
                  bsStyle='success'
                  onClick={this.addProposal}
                >
                  Add proposal
                </Button>
                <h5>{this.props.proposal.proposals.message}</h5>
              </FormGroup>
            </Form>
            {proposals && proposals.map((proposal, id) => {
              return (
                <Col xs={12} sm={12} md={12} key={id} className='proposal_block'>
                  <Col xs={12} sm={12} md={12}>
                    <p className='proposal'>{proposal}</p>
                  </Col>
                  <Col xs={2} sm={2} md={2} className='delete_proposal_button'>
                    <Button
                      bsStyle='danger'
                      onClick={this.deleteProposal.bind(this, proposal)}
                    >
                    Delete Proposal
                    </Button>
                  </Col>
                  <Col xs={8} sm={8} md={8}>
                    <FormControl
                      className='input_offer'
                      componentClass='textarea'
                      placeholder='add your offer...'
                      rows='2'
                      onChange={this.handleChangeOffer}
                      />
                  </Col>
                  <Col xs={2} sm={2} md={2}>
                    <Button
                      bsStyle='info'
                      onClick={this.sendOfferProposal.bind(this, proposal, this.state.offer)}
                    >
                    Send Offer
                    </Button>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <h5 ref={proposal} className='response'></h5>
                  </Col>
                </Col>
              );
            })}
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addProposals, getProposalsList, deleteProposal, sendOffer}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    proposal: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Proposals);
