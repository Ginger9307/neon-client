import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../../contexts/SocketProvider';
import { loadQuestions, createGame } from '../../actions';


const WaitingRoomJoin = () => {

  const history = useHistory(); 
  const socket = useSocket();
  const dispatch = useDispatch();
  const room = useSelector(state => state.room);

  useEffect(() => {
    socket.on('init-game', (diff, qnum, quiz) => {
      dispatch(loadQuestions(quiz));
      history.push('/game');
    });
  }, [socket]);
  
  return (
    <div>
        <h2> Waiting for Admin to start the game </h2>
        <a href='/menu'className='btn-nav'>{'<< '}menu </a> 
        {/* <a onClick={handleNext} className='btn-nav'>start {' >>'} </a>  */}

    </div>);
};

export default WaitingRoomJoin;