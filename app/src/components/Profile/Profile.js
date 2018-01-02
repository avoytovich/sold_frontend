import React from 'react';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Profile.css';
import { ModalWindow } from './../../components';
import { getUser } from './../../containers/Navigation/navigationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfile } from './profileUpdateActions';

export class Profile extends React.Component {

  componentWillMount() {
    this.props.getUser();
  }

  constructor(props) {
    super(props);
    this.state = {
      editProfile: ''
    };
  }

  handleChange = (profile, name, contact) => {
    this.setState({
      editProfile: profile
    });
    this.props.updateProfile(profile.upload.url, name, contact);
  };

  render() {
    console.log('Profile props', this.props);

    const { editProfile } = this.state;
    const { getUserProfile, updateProfile } = this.props.profile;
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={12} md={12} className='profile'>
            <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
            <h3 className='profile_info'>Profile info</h3>
            <Image className='avatar' src={editProfile && editProfile.upload.url ||
              getUserProfile.profile && getUserProfile.profile.avatar} alt='avatar' />
            <h4 className='profile_info'>Name: {updateProfile.profile &&
              updateProfile.profile.name || getUserProfile.profile &&
                getUserProfile.profile.name}</h4>
            <h4 className='profile_info'>Contact: {updateProfile.profile &&
              updateProfile.profile.contact || getUserProfile.profile &&
              getUserProfile.profile.contact}</h4>
            <ModalWindow toprofile={this.handleChange}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getUser, updateProfile}, dispatch);
};

const mapStateToProps = state => {
  return {
    profile: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

