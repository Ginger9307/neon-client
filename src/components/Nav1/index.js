import React from 'react';
import './style.css'

const Nav1 = ({links} ) => {
    console.log(links[0], links[1] )

  return (
    <div className='nav'>
        <a href={links[0]} className='btn-nav'>{'<< '}back </a> 
        <a href={links[1]} className='btn-nav'>next {' >>'} </a> 
    </div>);
};

export default Nav1;
