import React from 'react';
import { GameSetting } from '../../components';

const NewGame = () => {
  return (
    <div>
        <h1 className='glow'> NEW GAME</h1>
        <GameSetting />
        {/* <Nav1 links={['/menu', '/players']} />  */}
    </div>);
};

export default NewGame;
