import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';


const WaitingRoom = () => {

  const history = useHistory(); 
  const socket = useSocket();
  const room = useSelector(state => state.room);
  const player = useSelector(state => state.player);
  const questions = useSelector(state => state.questions);

  const handleNext = (() => {
    socket.emit('start-game', room, questions);
    history.push('/game');
  })

  useEffect(() => {
    socket.emit('join-room', room, player);
  }, []);

  useEffect(() => {
    socket.on('user-join', playerName => {
      //write function to add names to list
      console.log(playerName)
    });
  }, [socket]);
  
  return (
    <div>
        <h2> Waiting for others player(s)</h2>
        <a href='/menu'className='btn-nav'>{'<< '}back </a> 
        <a onClick={handleNext} className='btn-nav'>next {' >>'} </a> 

    </div>);
};

export default WaitingRoom;
