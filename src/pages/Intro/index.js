import React from 'react';
import { PowerButton } from '../../components';
import './style.css';
import { Container, Row, Col } from "reactstrap";

const Intro = () => {
  return (
    <div id="intro">
     <hr className="line1"/>
     <hr className="line2"/>
        <Container>
          <Row> 
            <Col>
              <label className='welcome'> WELCOME </label>
            </Col>
          </Row>
          <Row>
            <Col xs='3'>
              <label className="to-the">TO THE </label>
            </Col>

            <Col xs='9'>
              <label className='quiz glow-pink'> N-QUIZ </label>
            </Col>
          
          </Row>
        </Container>
        <hr className="line3"/>
        <hr className="line4"/>
        <PowerButton />
    </div>);
};

export default Intro;
