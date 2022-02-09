import React from 'react';
import { useState } from 'react';

const RoomDetail = () => {
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

  return (
    <div>
        <p>Room</p>
        <input type='text' value={roomInput} onChange={handleRoomInput} required/>

        <p>Player name</p>
        <input type='text' value={nameInput} onChange={handleNameInput} required/>
    </div>);
};

export default RoomDetail;
