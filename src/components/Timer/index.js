import React, { useEffect, useState } from 'react';

const Timer = ({initSec, index}) => {
  
   
   
  const [seconds, setSeconds ] =  useState(initSec);
   
   useEffect(() => {
     let myInterval = setInterval(() => {
       if (seconds > 0) {
           setSeconds(seconds - 1);
       }
     }, 1000)
     return () => clearInterval(myInterval);
   });
   console.log(index)

   useEffect(() => {
    setSeconds(initSec);
  }, [index]);
    
  return (
    <div>
        <div className='countdown-timer'>
            {seconds}
        </div>        
    </div>);
};

export default Timer;
