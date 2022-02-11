import React, { useEffect, useState } from 'react';
import { recordAnswer } from '../../actions';
import { useDispatch } from 'react-redux';

const Timer = ({ init, index, handleZero }) => {
    const dispatch = useDispatch;
    const [seconds, setSeconds ] =  useState(init);
   
    useEffect(() => {
        let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        }, 1000)
        return () => clearInterval(myInterval);
   });

   useEffect(() => {
        setSeconds(init);
    }, [index]);
    

    return (
        <div>
            <div className='countdown-timer'>
                {seconds}
            </div>        
        </div>);
};

export default Timer;
