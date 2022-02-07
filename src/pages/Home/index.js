import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'


const Home = () => {

  return (
    <div className='container'>
        <h1 className='glow'>MENU</h1>
        <div className='container menu'>
        
            <a href='/create' className='btn-ng' id=''>NEW GAME {' >>'} </a> 

            <a href='/join' className='btn-jg'id='' id=''>JOIN GAME {' >>'} </a> 

            <a href='/leaderboard' className='btn-lb' id=''>LEADERBOARD {' >>'} </a>

            <a href='/about' className='btn-a' id=''>ABOUT {' >>'} </a>

        </div>); 
    </div>);
};

export default Home;
