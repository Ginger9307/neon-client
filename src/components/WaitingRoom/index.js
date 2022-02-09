import React, { useEffect, useState } from 'react';
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
  const [newPlayers, setNewPlayers] = useState([]);

  const handleNext = (() => {
    socket.emit('start-game', room, difficulty, numQ, questions);
    history.push('/game');
  })

  useEffect(() => {
    socket.emit('join-room', room, player);
  }, []);

  useEffect(() => {
    socket.on('user-join', playerName => {
      setNewPlayers(newPlayers => [...newPlayers, playerName])
    });
  }, [socket]);

  const renderPlayers = () => newPlayers.map(newPlayer => <li>{newPlayer}</li>)
  
  return (
    <div>
        <h2> Waiting for others players to join the game </h2>
        <ul>
          {renderPlayers()}
        </ul>
        <a href='/menu'className='btn-nav'>{'<< '}back </a> 
        <a onClick={handleNext} className='btn-nav'>start {' >>'} </a> 

    </div>);
};

export default WaitingRoom;
