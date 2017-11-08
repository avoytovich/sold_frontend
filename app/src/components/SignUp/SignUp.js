import React from 'react';
import { Form, FormGroup, FormControl, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from './signupActions';

const InputGroup = (props) => (
  <FormGroup>
    <Col xs={12} sm={12} md={12}>
      <FormControl {...props}/>
    </Col>
  </FormGroup>
  );

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state.email, this.state.password);
  };

  handleChange = stateName => e => {
    this.setState({
      [stateName]: e.target.value
    });
  };

  render() {
    console.log('SignUp props', this.props);
    return (
       <Form horizontal onSubmit={this.handleSubmit}>
        <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
        <h4>Registration form for Sign Up</h4>
          {['email', 'password'].map((param, id) =>
            <InputGroup
              key={id}
              className={param}
              type={param}
              placeholder={param.toUpperCase()}
              value={this.state[param]}
              onChange={this.handleChange(param)}
            />
          )}
          <FormGroup>
            <Col xs={12} sm={12} md={12}>
              <Button bsStyle='info' type='submit'>
                Sign Up
              </Button>
              <h5>{this.props.sign.signUp.message}</h5> 
            </Col>
          </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signUp}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    sign: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
