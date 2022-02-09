import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGame } from '../../actions';
import { useHistory } from 'react-router-dom'
import './style.css'

const GameSetting = () => { 
  // selector hook for all todos data in the store
  // const list = useSelector(list => list.all);
  // console.log(list)
  // dispatch hook for data in the store
  const dispatch = useDispatch();
  const history = useHistory();

  // state hook for number of players input 
  const [numPlInput, setNumPlInput] = useState('1');
  // handle number of players input
  const handleNumPlInput = (e) => {
    const value = e.target.value;
    console.log('players',value);
    setNumPlInput(value);
  }

  // state hook for difficulty input
  const [difficultyInput, setDifficultyInput] = useState('easy');
  // handle difficulty input
  const handleDifficultyInput = (e) => {
    const value = e.target.value;
    console.log('dif',value);
    setDifficultyInput(value);
  }

 // state hook for category input
 const [categoryInput, setCategoryInput] = useState('9');
 // handle category input
 const handleCategoryInput = (e) => {
   const value = e.target.value;
   console.log('cat',value);
   setCategoryInput(value);
 }

 // state hook for room input
 const [roomInput, setRoomInput] = useState('1');
 // handle room input
 const handleRoomInput = (e) => {
  const value = e.target.value;
  console.log('room',value);
  setRoomInput(value);
}
// state hook for name input
const [nameInput, setNameInput] = useState('player1');
// handle name input
 const handleNameInput = (e) => {
  const value = e.target.value;
  console.log('name',value);
  setNameInput(value);
}

  // clear all inputs after button click
  const handleClickClear = () => {
  // setTextInput('');
    setNumPlInput('1');
    setDifficultyInput('easy');
    setCategoryInput('9');
    setRoomInput('room');
    setNameInput('player1');
  }

  const handleSubmit = () => {
    console.log(roomInput, numPlInput, categoryInput, difficultyInput, nameInput);
    dispatch(createGame(roomInput, numPlInput, Number(categoryInput), difficultyInput, nameInput));
    history.push('/players')
  }

  return (
    <div className='settings'>
      <form onSubmit={() => {handleSubmit(); handleClickClear()}}>
        <p>Number of players</p>
        <input type='number' max-value='?' value={numPlInput} onChange={handleNumPlInput} required/>

        <p>Difficulty</p>
          <p>
            <input className="" type="radio" name="level" value={"easy"} checked={difficultyInput === 'easy'} onChange={handleDifficultyInput} / >
            <label>Easy</label>
          </p>
          <p>
            <input className="" type="radio" name="level" value="medium" checked={difficultyInput === 'medium'} onChange={handleDifficultyInput} />
            <label>Medium</label>
          </p>
          <p>
            <input className="" type="radio" name="gender" value="hard" checked={difficultyInput === 'hard'} onChange={handleDifficultyInput} />
            <label>Hard</label>
          </p>
        
        <p>Category</p>
        <input type='number' value={categoryInput} onChange={handleCategoryInput} required/>
        
        <p>Room</p>
        <input type='text' value={roomInput} onChange={handleRoomInput} required/>

        <p>Player name</p>
        <input type='text' value={nameInput} onChange={handleNameInput} required/>

      </form>
      <div className='nav'>
        <a href='/menu' className='btn-nav'>{'<< '}back </a> 
        <a onClick={handleSubmit} className='btn-nav'>next {' >>'}  </a> 
      </div>
    </div>);
};

export default GameSetting;
