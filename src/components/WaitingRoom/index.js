import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';


const WaitingRoom = () => {

  const history = useHistory(); 
  const socket = useSocket();
  const room = useSelector(state => state.room);
  const player = useSelector(state => state.player);
  const difficulty = useSelector(state => state.difficulty);
  const numQ = useSelector(state => state.numQ);
  const questions = useSelector(state => state.questions);

  const handleNext = (() => {
    socket.emit('start-game', room, difficulty, numQ, questions);
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
        <h2> Waiting for other players to join the game </h2>
        <a href='/menu'className='btn-nav'>{'<< '}back </a> 
        <a onClick={handleNext} className='btn-nav'>start {' >>'} </a> 

    </div>);
};

export default WaitingRoom;
