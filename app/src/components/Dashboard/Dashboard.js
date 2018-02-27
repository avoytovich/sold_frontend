import React from 'react';
import { Grid, Row, Col, Button, PanelGroup, Panel } from 'react-bootstrap';
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
            <h3 className="proposalMy">your's proposals</h3>
            {proposalsMy && proposalsMy.map((proposalMy, id) => {
              var defaultActiveKey = proposalsMy.length;
              return (

                <PanelGroup key={id} accordion id="accordion-example">
                  <Panel eventKey={id}>
                    <Panel.Heading>
                      <Panel.Title toggle>{proposalMy}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                      aesthetic synth nesciunt you probably haven't heard of them accusamus
                      labore sustainable VHS.
                    </Panel.Body>
                  </Panel>
                </PanelGroup>

                /*<Tabs
                  key={id}
                  defaultActiveKey={defaultActiveKey}
                  id="uncontrolled-tab-example"
                  onClick={this.myOffersProposal.bind(this, proposalMy)}
                >
                    <Tab eventKey={id} title={proposalMy} >
                      <h3 className="offersByProposal">offers which was sent for your consideration</h3>
                      {myOffersByProposal && myOffersByProposal.map((offer, id) => {
                        return (
                          <p
                            key={id}
                            className="offersByProposal"
                            /!*onClick={this.myOffersProposal.bind(this, proposalMy)}*!/
                          >
                            {offer.title}
                          </p>
                        );
                      })}
                    </Tab>
                </Tabs>*/
              );
            })}
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
