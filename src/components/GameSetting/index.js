import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGame } from '../../actions';
import { useHistory } from 'react-router-dom';
import './style.css';
import { Container, Row, Col } from "reactstrap";


const GameSetting = () => { 
  // dispatch hook for data in the store
  const dispatch = useDispatch();
  // hustory hook to navigate
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
 const [roomInput, setRoomInput] = useState('neon');
 // handle room input
 const handleRoomInput = (e) => {
  const value = e.target.value;
  console.log('room',value);
  setRoomInput(value);
}
// state hook for name input
const [nameInput, setNameInput] = useState('Player1');
// handle name input
 const handleNameInput = (e) => {
  const value = e.target.value;
  console.log('name',value);
  setNameInput(value);
}

  // clear all inputs after button click
  const handleClickClear = () => {
    setNumPlInput('1');
    setDifficultyInput('easy');
    setCategoryInput('9');
    setRoomInput('neon');
    setNameInput('Player1');
  }

  const handleSubmit = () => {
    console.log(roomInput, numPlInput, categoryInput, difficultyInput, nameInput);
    dispatch(createGame(roomInput, numPlInput, Number(categoryInput), difficultyInput, nameInput));
    history.push('/players')
  }

  return (
    <div id="new-game">
      <div className='settings'>
      <Container>

        <Row className='numP-frame d-flex justify-content-center'>
          <Col xs='9' className=''>
            <label>Number of Players</label>
          </Col>  
          <Col xs='3' className='d-flex justify-content-end'>
            <input className='inp-num' type='number' min ='1' max='4' value={numPlInput} onChange={handleNumPlInput} required/>
          </Col>
        </Row>

        <Row className='diff-frame d-flex justify-content-between'>

          <Col xs="auto">
            <label >Difficulty</label>
          </Col>

          <Col xs="auto" >
              <input className="radio" type="radio" name="level" value={"easy"} checked={difficultyInput === 'easy'} onChange={handleDifficultyInput} / >
              <span>Easy</span>
          </Col>

          <Col xs='auto'>
              <input className="radio" type="radio" name="level" value="medium" checked={difficultyInput === 'medium'} onChange={handleDifficultyInput} />
              <span>Medium</span>
          </Col>

          <Col xs='auto' >
              <input  type="radio" name="gender" value="hard" checked={difficultyInput === 'hard'} onChange={handleDifficultyInput} />
              <span>Hard</span>
          </Col>

        </Row>
      
        <Row className='categ-frame'> 
          <Col xs='3'>
            <label>Category</label>
          </Col>
          <Col xs='9' className='d-flex justify-content-end'>
            <select className='select-cat' value={categoryInput} onChange={handleCategoryInput} >
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime & Manga</option>
                <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
          </Col>
        </Row>

        <Row className='room-frame'>
          <Col xs='5'>
            <label>Game</label>
          </Col>
          <Col xs='7' >
            <input className='inp-game d-flex justify-content-end' type='text' maxLength='20' value={roomInput} onChange={handleRoomInput} required/>
          </Col>
        </Row>

        <Row className='player-frame'>
          <Col xs='5'>
            <label>Player</label>
          </Col>
          <Col xs='7' >
            <input className='inp-player d-flex justify-content-end' type='text' maxLength='20' value={nameInput} onChange={handleNameInput} required/>
          </Col >
        </Row>

      </Container>
      </div>

      <div className='nav'>
        <a href='/menu' className='btn-nav btn-nav-l'>{'<< '}menu </a> 
        <a onClick={handleSubmit} className='btn-nav btn-nav-r'>next {' >>'}  </a> 
      </div>

    </div>);
    
};

export default GameSetting;
