import React from 'react';
import { Nav1, WaitingRoom } from '../../components';
import { useSelector } from 'react-redux';


const Players = () => {
  

  return (
    <div>
      <h1 className='glow'> Waiting room  </h1>
      <WaitingRoom />
      {/* <Nav1 links={['/menu', '/game']} />  */}
    </div>);
};

export default Players;
