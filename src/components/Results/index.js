import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';
import './style.css';
import { Container, Row, Col } from "reactstrap";

const Results = () => {
  const socket = useSocket();
  const score = useSelector(state => state.score);
  const room = useSelector(state => state.room);
  const player = useSelector(state => state.player);
  const playerScores = useSelector(state => state.playerScores);
  const multiplayer = useSelector(state => state.multiplayer);
  const [gameResult, setGameResult] = useState({})

  useEffect(() => {
      socket.emit('end-game', room, player, score);
  }, []);


  useEffect(() => {
    console.log("score", playerScores); 
    playerScores.forEach(pS => {
        if (pS.score < score) { 
            setGameResult({
                res: 'WIN',
                style: "res-win"
            } )
        }

        if (pS.score === score) {
          setGameResult({
                    res: 'DRAW',
                    style: "res-draw"
                } )
        }

        if (pS.score > score) {
          setGameResult({
                    res: 'DEFEAT',
                    style: "res-defeat" 
                })
        }
    })
      console.log("score",playerScores, gameResult)

  }, [playerScores]);

  useEffect(() => {
    console.log(gameResult)
  }, [gameResult]);

  // const renderPlayers = () => playerScores.map(playerScore => <h3>{playerScore.player} scored:{playerScore.score}</h3>)

  return (
    <div id='results'>
        <div>
        { 
          !multiplayer?
            <h2> YOUR SCORE: {score}</h2>
          :
            playerScores.length === 0? 
              <h2> Waiting for other players to finish the game <span className='blink'>...</span> </h2> 
            :
              <div>
                <h1 className={gameResult.style}> {gameResult.res} </h1>
                <Container>
                <Row className='res-row'>
                  <Col>
                    <h3> {player} </h3>
                  </Col>
                  <Col>
                    <label>{score}</label>
                  </Col> 
                </Row> 
                {
                  playerScores.map(pS => (
                    <Row className='res-row'>
                      <Col>
                        <label key={pS.player}> {pS.player} </label>
                      </Col>
                      <Col>
                        <label> {pS.score} </label>
                      </Col>
                    </Row> 
                  ))
                }
                
                </Container>
              </div>
        }    
        </div>

        <div className='nav'>
            <a href={'/menu'} className='btn-nav'>{'<< '}menu </a> 
        </div>

    </div>);
};

export default Results;
