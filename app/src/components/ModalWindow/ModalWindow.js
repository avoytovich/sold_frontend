import React from 'react';
import { Modal, Button, Form, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { uploadFile } from './modalUploadActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ModalWindow.css';

const InputGroup = (props) => (
    <FormGroup>
      <Col xs={12} sm={12} md={12}>
        <FormControl {...props}/>
      </Col>
    </FormGroup>
);

export class ModalWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      profile: '',
      name: '',
      contact: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      profile: nextProps.url
    });
  }

  onDrop = files => {
    this.props.uploadFile(files);
  };

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  handleChange = param => e => {
    this.setState({
      [param]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { toprofile, url } = this.props;
    const { profile, name, contact } = this.state;
    toprofile(profile, name || url.updateProfile.profile && url.updateProfile.profile.name ||
      url.getUserProfile.profile.name, contact || url.updateProfile.profile &&
        url.updateProfile.profile.contact || url.getUserProfile.profile.contact);
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {

    console.log('ModalWindow props', this.props);

    return (
      <div>
        <Button
          className='edit_profile_info'
          bsStyle='success'
          bsSize='large'
          onClick={this.open}
        >
          Edit profile
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Dropzone className='file-uploader' onDrop={this.onDrop} multiple={false}>
              <div>Try dropping a file here, or click to select a file to upload</div>
            </Dropzone>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
              {['name', 'contact'].map((param, id) => (
                <div key={id}>
                  <p>{param}:</p>
                  <InputGroup
                    className={param}
                    type={param}
                    placeholder={param.toUpperCase()}
                    value={this.state[param]}
                    onChange={this.handleChange(param)}
                  />
                </div>
              ))}
              <Button bsStyle='info' type='submit' onClick={this.toggleModal}>
                Save
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({uploadFile}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    url: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
