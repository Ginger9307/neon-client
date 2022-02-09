import React from 'react';
import { useHistory } from 'react-router';


const WaitingRoom = () => {

  const history = useHistory(); 

  const handleNext = () =>
    history.push('/game')
  
  return (
    <div>
        <h2> Waiting for others player(s)</h2>
        <a href='/menu'className='btn-nav'>{'<< '}back </a> 
        <a onClick={handleNext} className='btn-nav'>next {' >>'} </a> 

    </div>);
};

export default WaitingRoom;
