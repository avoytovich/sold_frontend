import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Main.css';
import { About, Login, Logo } from './../../components';

export class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={12} md={12}>
            <Logo />
          </Col>
          <Col xs={6} sm={6} md={6}>
            <About />
          </Col>
          <Col xs={6} sm={6} md={6}>
            <Login />
          </Col>
        </Row>
      </Grid>
    );
  }
}
