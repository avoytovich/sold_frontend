import React from 'react';
import { Grid, Row, Col, Button, Panel, Accordion } from 'react-bootstrap';
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
      title: ''
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
            <h3 className="proposalMy">your's proposals</h3>
            <Accordion>
              {proposalsMy && proposalsMy.map((proposalMy, id) => {

                return (

                        <Panel header={proposalMy} eventKey={id} key={id}
                               onClick={this.handleNodeGetMyOffersProposal.bind(this, proposalMy)} >
                          {myOffersByProposal && myOffersByProposal.map((offer, id) => {
                            return (
                              <p
                                key={id}
                                className="offersByProposal"
                                /*onClick={this.myOffersProposal.bind(this, proposalMy)}*/
                              >
                                {offer.title}
                              </p>
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
