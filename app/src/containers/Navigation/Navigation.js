import React from 'react';
import { Nav, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getUser } from './navigationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Navigation.css';
import { logOut } from './../../components/Login/loginActions';
import { uploadFile } from './../../components/ModalWindow/modalUploadActions';

export class Navigation extends React.Component {

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    console.log('Navigation props', this.props);

    const { getUserProfile } = this.props.profile;
    const { updateProfile } = this.props.profile;

    return (
      <div>
        <div className='pull-right'>
          <NavDropdown className='dropdown' title={`Hallo, ${updateProfile.profile &&
              updateProfile.profile.name || getUserProfile.profile &&
            getUserProfile.profile.name}`} id='nav-dropdown'>
            <MenuItem>Signed in as {updateProfile.profile &&
              updateProfile.profile.name || getUserProfile.profile &&
              getUserProfile.profile.name} </MenuItem>
            <MenuItem divider />
            <LinkContainer to='/profile'>
              <MenuItem>Your Profile</MenuItem>
            </LinkContainer>
            <MenuItem onClick={this.props.logOut}>Sign out</MenuItem>
          </NavDropdown>
          {getUserProfile.profile &&
            <Image className='small_avatar' src={updateProfile.profile &&
              updateProfile.profile.avatar || getUserProfile.profile.avatar} alt='avatar' />}
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getUser, logOut, uploadFile}, dispatch);
};

const mapStateToProps = state => {
  return {
    profile: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
