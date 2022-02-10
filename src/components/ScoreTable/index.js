import React, {useEffect, useState} from 'react';


const ScoreTable = () => {

  const [leaderBoard, setLeaderBoard]=useState([]);

// Get leaders board

  useEffect(() => {
    async function getLeaderBoard() {
        const response = await fetch ('http://localhost:8080/players',{
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

  const renderLeaderBoard = () => leaderBoard.map(leadPlayer => <h3>{leadPlayer.username} scored:{leadPlayer.score}</h3>)


  return (
    <div>

      
     
        {renderLeaderBoard()}
    </div>
  );
};

export default ScoreTable;
