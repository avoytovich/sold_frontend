import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { getMyProposals } from './getMyProposalsActions.js';
import { getMyOffersProposal } from './retrieveOffersProposalActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

  myOffersProposal(title) {
    this.setState({
      title
    });
    setTimeout(() => {
      this.props.getMyOffersProposal(this.state.title);
    }, 100);
  };

  render() {
    console.log('Dashboard props', this.props);

    //console.log('title state', this.state.title);

    const { proposalsMy } = this.props.proposalsMy.getMyProposalsList;
    const { myOffersByProposal } = this.props.proposalsMy.getMyOffersByProposalList;
    myOffersByProposal && console.log('myOffersByProposal', myOffersByProposal);

    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={12} md={12}>
            <div className='add_proposal_button'>
              <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
            </div>
          </Col>
          <Col xs={4} sm={4} md={4}>
            <h3>Its your proposals :)</h3>
            {proposalsMy && proposalsMy.map((proposalMy, id) => {
              return (
                <Button
                  onClick={this.myOffersProposal.bind(this, proposalMy)}
                  key={id} >
                  {proposalMy}
                </Button>
              );
            })}
          </Col>
          <Col xs={4} sm={4} md={4}>

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
