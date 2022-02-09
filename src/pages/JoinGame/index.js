import React from 'react';
import { Nav1, RoomDetail } from '../../components';

const JoinGame = () => {
  return (
    <div>
        <h1 className='glow'> JOIN GAME</h1>
        <RoomDetail />
        <Nav1 links={['/menu', '/players']} /> 
    </div>);
};

export default JoinGame;
