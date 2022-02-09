import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';


const WaitingRoomJoin = () => {

  const history = useHistory(); 
  const socket = useSocket();
  const room = useSelector(state => state.room);

  
  return (
    <div>
        <h2> Waiting for Admin to start the game </h2>
        <a href='/menu'className='btn-nav'>{'<< '}menu </a> 
        {/* <a onClick={handleNext} className='btn-nav'>start {' >>'} </a>  */}

    </div>);
};

export default WaitingRoomJoin;