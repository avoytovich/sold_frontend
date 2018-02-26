import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { getMyProposals } from './getMyProposalsActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Dashboard extends React.Component {

  componentWillMount() {
    this.props.getMyProposals();
  }

  render() {
    console.log('Dashboard props', this.props);

    const { proposalsMy } = this.props.proposalsMy.getMyProposalsList;
    proposalsMy && console.log('proposalsMy', proposalsMy);

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
                <Button onClick={} key={id}>{proposalMy}</Button>
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
  return bindActionCreators({getMyProposals}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    proposalsMy: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
