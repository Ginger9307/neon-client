import React from 'react';
import { Nav1, WaitingRoom } from '../../components';


const Players = () => {
  return (
    <div>
      <h1 className='glow'> PLAYERS </h1>
      <WaitingRoom />
      {/* <Nav1 links={['/menu', '/game']} />  */}
    </div>);
};

export default Players;
