import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSocket } from '../../contexts/SocketProvider';
import { useDispatch } from 'react-redux';
import { loadPlayer } from '../../actions';
import './style.css';
import { Container, Row, Col } from "reactstrap";


const RoomDetail = () => {
  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const socket = useSocket();
  // state hook for room input
  const [roomInput, setRoomInput] = useState('neon');
 // handle room input
  const handleRoomInput = (e) => {
  const value = e.target.value;
  console.log('room',value);
  setRoomInput(value);
  }
  // state hook for name input
  const [nameInput, setNameInput] = useState('Player2');
  // handle name input
  const handleNameInput = (e) => {
  const value = e.target.value;
  console.log('name',value);
  setNameInput(value);
  }

  const handleSubmit = () => {
    console.log(roomInput, nameInput);
    socket.emit('join-room', roomInput, nameInput);
    dispatch(loadPlayer(roomInput, nameInput));
    history.push('/players')
  } 

  return (
    <div id="join-game">
      <div className='settings'>
      <Container>
         <Row className='room-frame'>
          <Col xs='5'>
            <label>Game</label>
          </Col>
          <Col xs='7' >
            <input className='inp-game d-flex justify-content-end' type='text' maxLength='20' value={roomInput} onChange={handleRoomInput} required/>
          </Col>
        </Row>

        <Row className='player-frame'>
          <Col xs='5'>
            <label>Player</label>
          </Col>
          <Col xs='7' >
            <input className='inp-player d-flex justify-content-end' type='text' maxLength='20' value={nameInput} onChange={handleNameInput} required/>
          </Col >
        </Row>
      </Container>
      </div>
        
      <div className='nav'>
            <a href='/menu' className='btn-nav btn-nav-l'>{'<< '}menu </a> 
            <a onClick={handleSubmit} className='btn-nav btn-nav-r'>start {' >>'}  </a> 
      </div>

    </div>);
};

export default RoomDetail;
