import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { recordAnswer, saveScore } from '../../actions';
import './style.css';

// decoding function (for some symbols in questiond & answers)
function decode(s) {
    var el = document.createElement("div");
    el.innerHTML = s;
    return el.innerText || el.textContent;
}
// 
const initTimer = 15;

// Question COMPONENT
const Question = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const numQ = useSelector(state => state.numQ);
    const index = useSelector(state => state.index);
    const set = useSelector(state => state.questions[index]);
    const score = useSelector(state => state.score);
    const question = set.question;
    const cAnswer = set.correct_answer;
    const answers = set.answers

    const callNextQuestion = (curScore) => {
        dispatch(recordAnswer(curScore));
        setTimer(initTimer);
        if (index === numQ-1) {
            console.log(score+curScore);  
            dispatch(saveScore(score+curScore));
            history.push('/results');
        };
    }
    // handle answer function 
    const handleAnswerSelect = (answer) => {
        console.log(answer);
        const curScore = (answer === cAnswer)? 1: 0;
        callNextQuestion(curScore);
    };

    // handle timer reach zero
    const handleZero = () => {
        const curScore = 0;
        callNextQuestion(curScore);
    }

    // work out timer 
    const [timer, setTimer] = useState(initTimer);
    const [seconds, setSeconds ] =  useState(timer);
   
    useEffect(() => {
        let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        }, 1000)
        return () => clearInterval(myInterval);
    });

    useEffect(() => {
        setSeconds(timer);
    }, [index]);
    
    useEffect(() => {
        if (seconds === 0) {
           console.log('zero!')
           handleZero();
        };
    }, [seconds]);

    // HTML
    return (
        <div>
            <h2> Question {index+1} / {numQ}</h2>
                <h3> {decode(question)} </h3>
                {/* <Timer init={timer} index={index} />  */}
                <div className='countdown-timer'>
                    {seconds}
                </div>  
                {
                    answers.map(a => (
                    <button key={a} onClick={() => handleAnswerSelect(a)}>
                        {decode(a)}
                    </button>
                    ))
                } 
            <h3> {score} </h3> 
        </div>);
    };

export default Question;
