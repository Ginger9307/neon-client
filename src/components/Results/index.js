import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Results = () => {
  const score = useSelector(state => state.score);

  return (
    <div>
        <h2> YOUR SCORE:  {score}</h2>
        <h3> SWITCH FOR WAITING ALL RESULTS</h3>

        <div className='nav'>
            <a href={'/menu'} className='btn-nav'>menu </a> 
            {/* <a href={'leaderboard'} className='btn-nav'>leaderboard {' >>'} </a>  */}
        </div>
    </div>);
};

export default Results;
