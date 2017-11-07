import React from 'react';
import { browserHistory } from 'react-router';
import { Col, Button } from 'react-bootstrap';
import './Logo.css';

export class Logo extends React.Component {

  signUp(e) {
    e.preventDefault();
    browserHistory.push('/signup');
  }

  render() {
    return (
      <div id='logo'>
        <Button
          bsStyle='success'
          onClick={this.signUp}
        >Sign up</Button>
        <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
      </div>
    );
  }
}
