import React from 'react';
import { Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import { getUser } from './navigationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Navigation.css';

export class Navigation extends React.Component {

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    console.log('Navigation props', this.props);
    return (
      <div>
        <Nav bsStyle='pills' className='pull-right'>
          <NavDropdown title={`Hallo, ${this.props.name.getUserName.name}`} id='nav-dropdown'>
            <MenuItem>Signed in as {this.props.name.getUserName.name}</MenuItem>
            <MenuItem divider />
            <MenuItem>Your Profile</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </NavDropdown>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getUser}, dispatch);
};

const mapStateToProps = state => {
  return {
    name: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
