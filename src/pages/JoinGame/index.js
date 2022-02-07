import React from 'react';
import { Nav1 } from '../../components';

const JoinGame = () => {
  return (
    <div>
        <h1 className='glow'> JOIN GAME</h1>
        {/* render <JoinGame /> component */}
        <Nav1 links={['/menu', '/players']} /> 
    </div>);
};

export default JoinGame;
