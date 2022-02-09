import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSocket } from '../../contexts/SocketProvider';
import { useDispatch } from 'react-redux';
import { loadPlayer } from '../../actions';

const RoomDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const socket = useSocket();
  // state hook for room input
  const [roomInput, setRoomInput] = useState('1');
 // handle room input
  const handleRoomInput = (e) => {
  const value = e.target.value;
  console.log('room',value);
  setRoomInput(value);
}
  // state hook for name input
  const [nameInput, setNameInput] = useState('player2');
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
    <div>
        <p>Room</p>
        <input type='text' value={roomInput} onChange={handleRoomInput} required/>

        <p>Player name</p>
        <input type='text' value={nameInput} onChange={handleNameInput} required/>
        
        <div className='nav'>
            <a href='/menu' className='btn-nav'>{'<< '}back </a> 
            <a onClick={handleSubmit} className='btn-nav'>start {' >>'}  </a> 
      </div>
    </div>);
};

export default RoomDetail;
