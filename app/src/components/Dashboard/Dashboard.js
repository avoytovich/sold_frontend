import React from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Form, Button, Panel, Accordion, Modal } from 'react-bootstrap';
import { getMyProposals } from './getMyProposalsActions.js';
import { getMyOffersProposal } from './retrieveOffersProposalActions';
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
      subject: '',
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

  handleChangeSubject = e => {
    e.preventDefault();
    this.setState({
      subject: e.target.value
    });
  };

  send = () => {

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
          <Col xs={4} sm={4} md={4}>
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
                            reply to this offer: {offer.title}
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
                                    placeholder='input your reply...'
                                    rows='3'
                                    onChange={this.handleChangeSubject}
                                  />
                                  <Button
                                    bsStyle='success'
                                    onClick={this.send}
                                  >
                                    send
                                  </Button>
                                  {/*<h5>{this.props.proposal.proposals.message}</h5>*/}
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
  return bindActionCreators({getMyProposals, getMyOffersProposal}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    proposalsMy: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
