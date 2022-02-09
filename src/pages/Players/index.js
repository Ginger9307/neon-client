import React from 'react';
import { Nav1, WaitingRoom, WaitingRoomJoin } from '../../components';
import { useSelector } from 'react-redux';
import './style.css'


const Players = () => {
  const admin = useSelector(state => state.admin);
  console.log("admin",admin)

  return (
    <div>
      <div>
        <h1 className='glow'> WAITING ROOM</h1>
      </div>
      {
        admin? 
          <WaitingRoom /> 
        :
          <WaitingRoomJoin />
      }
    </div>);
};
;
export default Players;
