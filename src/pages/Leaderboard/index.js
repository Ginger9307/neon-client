import React from 'react';
import { ScoreTable } from '../../components';

const Leaderboard = () => {
  return (
    <div>
        <h1> LEADERBOARD</h1>
        <ScoreTable/>
        <button> 
            <a href='/menu'>back</a> 
        </button>
    </div>);
};

export default Leaderboard;
