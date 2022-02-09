import React from 'react';
import { useSelector } from 'react-redux';
import { Question, Nav1 } from '../../components'


const Game = () => {
  const room = useSelector(state => state.room);
  const amount = useSelector(state => state.amount);
  const category = useSelector(state => state.category);
  const difficulty = useSelector(state => state.difficulty);
  const player = useSelector(state => state.player);
  const questions = useSelector(state => state.questions);
  const index = useSelector(state => state.index);
  console.log(room,amount, category,difficulty,player,questions, index)

  return (
    <div>
        <h1>GAME</h1>
        <Question />
        <Nav1 links={['/menu', '/leaderboard']} /> 
    </div>);
};

export default Game;
