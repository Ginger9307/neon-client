import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question, Nav1 } from '../../components'
import { useSocket } from '../../contexts/SocketProvider';
import { recordPlayerResult } from '../../actions';


const Game = () => {
  const dispatch = useDispatch();
  const socket = useSocket();
  const room = useSelector(state => state.room);
  const amount = useSelector(state => state.amount);
  const category = useSelector(state => state.category);
  const difficulty = useSelector(state => state.difficulty);
  const player = useSelector(state => state.player);
  const questions = useSelector(state => state.questions);
  const index = useSelector(state => state.index);
  //console.log(room,amount, category,difficulty,player,questions, index)

  useEffect(() => {
    socket.on('end-results', (playerName, score) => {
        console.log(playerName + score)
        dispatch(recordPlayerResult(playerName, score));
    });
  }, [socket]);

  return (
    <div>
        <h1>GAME</h1>
        <Question />
        <Nav1 links={['/menu', '/leaderboard']} /> 
    </div>);
};

export default Game;
