import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';
import './style.css';
import { Container, Row, Col } from "reactstrap";

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

  const renderPlayers = () => {
    newPlayers.map(newPlayer => <h3 key={newPlayer}>{newPlayer}</h3>)
  }

  return (
    <div id="waiting-room">
      <div className='wr-main'>
        {
          newPlayers.length === 0? 
            <h2> Waiting for others players to join the game <span className='blink'>...</span> </h2> 
          :
            <div>
            {/* renderPlayers() */}
              <h2> Joined:</h2>
              {
                newPlayers.map(newPlayer => 
                  <h3 key={newPlayer}>{newPlayer}</h3>
                )}
            </div>
        }
        </div>

        <div className='nav'>
          <a href='/menu'className='btn-nav btn-nav-l'>{'<< '}back </a> 
          <a onClick={handleNext} className='btn-nav btn-nav-r'>start {' >>'} </a> 
        </div>

    </div>);
};

export default WaitingRoom;
