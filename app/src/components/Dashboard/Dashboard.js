import React from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Form, Button, Panel, Accordion, Modal } from 'react-bootstrap';
import { getMyProposals } from './getMyProposalsActions.js';
import { getMyOffersProposal } from './retrieveOffersProposalActions';
import { rifleMyContact } from "./rifleMyContactActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Dashboard.css';

export class Dashboard extends React.Component {

  componentWillMount() {
    this.props.getMyProposals();
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contact: '',
      showModal: false
    };
  };

  handleNodeGetMyOffersProposal(title) {
    this.setState({
      title
    });
    setTimeout(() => {
      this.props.getMyOffersProposal(this.state.title);
    }, 100);
  };

  send(title, contact) {
    this.props.rifleMyContact(title, contact);
  };

  handleChangeSubject = e => {
    e.preventDefault();
    this.setState({
      contact: e.target.value
    });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render() {
    console.log('Dashboard props', this.props);

    const { proposalsMy } = this.props.proposalsMy.getMyProposalsList;
    const { myOffersByProposal } = this.props.proposalsMy.getMyOffersByProposalList;
    const { message } = this.props.proposalsMy.rifleMyContact;

    //proposalsMy && console.log('proposalsMy', proposalsMy);
    //myOffersByProposal && console.log('myOffersByProposal', myOffersByProposal);

    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={12} md={12}>
            <div className='add_proposal_button'>
              <img className='logo' src={require('./../../../assets/sold.png')} alt='logo'/>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6}>
            <h3 className='proposalMy'>your's proposals</h3>
            <Accordion>
              {proposalsMy && proposalsMy.map((proposalMy, id) => {
                return (
                  <Panel header={proposalMy} eventKey={id} key={id}
                         onClick={this.handleNodeGetMyOffersProposal.bind(this, proposalMy)} >
                    {myOffersByProposal && myOffersByProposal.map((offer, id) => {
                      return (
                        <div key={id}>
                          <Button
                            bsStyle='info'
                            className='offersByProposal'
                            onClick={this.open}
                          >
                            send your contact details to owner that offers this: {offer.title}
                          </Button>
                          <Modal show={this.state.showModal} onHide={this.close}>
                            <Modal.Header closeButton>
                              <Modal.Title>input your reply</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form horizontal>
                                <FormGroup>
                                  <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
                                  <FormControl
                                    className='input_proposals'
                                    componentClass='textarea'
                                    placeholder='input additional information...'
                                    rows='3'
                                    onChange={this.handleChangeSubject}
                                  />
                                  <Button
                                    bsStyle='success'
                                    onClick={this.send.bind(this, offer.title, this.state.contact)}
                                  >
                                    send your email to owner that offers this
                                  </Button>
                                  <h5>{message && message.message}</h5>
                                </FormGroup>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      );
                    })}
                  </Panel>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMyProposals, getMyOffersProposal, rifleMyContact}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    proposalsMy: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
