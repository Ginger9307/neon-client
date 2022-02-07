import React from 'react';
import { Nav2, ScoreTable } from '../../components';

const Leaderboard = () => {
  return (
    <div>
        <h1 className='glow'> LEADERBOARD</h1>
        <ScoreTable/>
        <Nav2 link={'/menu'} />
    </div>);
};

export default Leaderboard;
