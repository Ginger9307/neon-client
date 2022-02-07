import React from 'react';
import './style.css'

const Nav2 = ({link} ) => {
    console.log(link )
    
  return (
    <div className='nav'>
        <a href={link} className='btn-nav'>back</a> 
    </div>);
};

export default Nav2;
