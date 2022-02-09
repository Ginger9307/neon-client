import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';

const Results = () => {
  const socket = useSocket();
  const score = useSelector(state => state.score);
  const room = useSelector(state => state.room);
  const player = useSelector(state => state.player);
  const playerScores = useSelector(state => state.playerScores);

  useEffect(() => {
      socket.emit('end-game', room, player, score);
  }, []);

  useEffect(() => {
    console.log(playerScores)
  }, [playerScores]);

  const renderPlayers = () => playerScores.map(playerScore => <h3>{playerScore.player} scored:{playerScore.score}</h3>)

  return (
    <div>
        <h2> YOUR SCORE:  {score}</h2>
        {renderPlayers()}
        <div className='nav'>
            <a href={'/menu'} className='btn-nav'>menu </a> 
            {/* <a href={'leaderboard'} className='btn-nav'>leaderboard {' >>'} </a>  */}
        </div>
    </div>);
};

export default Results;
