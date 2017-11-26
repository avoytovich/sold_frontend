import React from 'react';
import { Form, FormGroup, FormControl, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from './signupActions';

const InputGroup = (props) => (
        <Col xs={12} sm={12} md={12}>
          <FormControl {...props}/>
        </Col>
    );

export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      validemail: 'warning',
      validpassword: 'warning',
      validname: 'warning'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.sign();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { validemail, validpassword, validname } = this.state;
    validemail == 'success' && validpassword == 'success' && validname == 'success' &&
      this.props.signUp(this.state.email, this.state.password, this.state.name);
  };

  sign = () => {
    const { validemail, validpassword, validname } = this.state;
    return validemail == 'warning' && 'email doesn\'t match pattern' ||
      validpassword == 'warning' && 'password must have at least 3 numbers' ||
        validname == 'warning' &&
          'name must have uppercase first letter and contain at least 2 characters' || '';
  };

  handleChange = stateName => e => {
    this.setState({
      [stateName]: e.target.value,
      ['valid' + stateName]: this.getValidationState(stateName, e.target.value)
    });
  };

  getValidationState = (stateName, value) => {
    const pattern = {
      email: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
      password: /^(?=.*\d).{3,20}$/,
      name: /^(?=.*[A-Z][a-z])/
    };
    switch (stateName) {
      case 'email':
        return value.match(pattern.email) && 'success' || 'warning';
      case 'password':
        return value.match(pattern.password) && 'success' || 'warning';
      case 'name':
        return value.match(pattern.name) && 'success' || 'warning';
      default:
        return 'warning';
    }
  };

  render() {
    console.log('SignUp props', this.props);

    return (
       <Form horizontal onSubmit={this.handleSubmit}>
        <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
        <h4>Registration form for Sign Up</h4>
          {['email', 'password', 'name'].map((param, id) =>
            <FormGroup
              key={id}
              validationState={this.state['valid' + param]}
            >
              <InputGroup
                className={param}
                type={param}
                placeholder={param.toUpperCase()}
                value={this.state[param]}
                onChange={this.handleChange(param)}
                required
              />
            </FormGroup>
          )}
          <FormGroup>
            <Col xs={12} sm={12} md={12}>
              <Button bsStyle='info' type='submit' title={this.sign()}>
                Sign Up
              </Button>
              <h5>{this.props.sign.signUp.message}</h5>
              <h5 ref='sign'></h5>
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
