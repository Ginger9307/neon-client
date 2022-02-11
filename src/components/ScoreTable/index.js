import React, {useEffect, useState} from 'react';
import './style.css';

const ScoreTable = () => {

  const [leaderBoard, setLeaderBoard]=useState([]);

// Get leaders board

  useEffect(() => {
    async function getLeaderBoard() {
        const response = await fetch ('https://neon-reactor.herokuapp.com/players',{
          method: 'GET',
          headers: {"Content-Type": "application/json"}});
        let data = await response.json();
        setLeaderBoard(data)
        if (data.err) {
          console.warn(data.err);
        }
    }
      getLeaderBoard();
  },[])

  const renderLeaderBoard = () => leaderBoard.map(leadPlayer => <h3>{leadPlayer.username} scored : {leadPlayer.score}</h3>)


  return (
    <div id='leaderboard'>
      <div className='leaderboard'>
          {renderLeaderBoard()}

      </div>
      
      <div className='nav'>
          <a href='/menu' className='btn-nav btn-nav-l'>{'<< '}menu </a> 
      </div>
    </div>
  );
};

export default ScoreTable;
