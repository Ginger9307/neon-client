import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { recordAnswer, saveScore } from '../../actions';
import { Nav1 } from '../../components'
import './style.css';
import { Container, Row, Col } from "reactstrap";
import audio1 from '../../style/wrong2.mp3'
import audio2 from '../../style/correct.mp3'

// decoding function (for some symbols in questiond & answers)
function decode(s) {
    var el = document.createElement("div");
    el.innerHTML = s;
    return el.innerText || el.textContent;
}
// 
const initTimer = 15;
// const btnColors = ['btn-a-g', 'btn-a-p', 'btn-a-y', 'btn-a-o']

const playWrong = () => {
    new Audio(audio1).play();
  }

const playRight = () => {
    new Audio(audio2).play();
  }

// Question COMPONENT
const Question = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const numQ = useSelector(state => state.numQ);
    const index = useSelector(state => state.index);
    const set = useSelector(state => state.questions[index]);
    const score = useSelector(state => state.score);
    const player = useSelector(state => state.player);
    const question = set.question;
    const cAnswer = set.correct_answer;
    const answers = set.answers

    const callNextQuestion = (curScore) => {
        dispatch(recordAnswer(curScore));
        curScore===0? playWrong() : playRight();
        setTimer(initTimer);
        if (index === numQ-1) {
            console.log(score+curScore);  
            dispatch(saveScore(score+curScore, player));
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
            <div className='question-main'>

                <h2 className='glow title'> QUESTION {index+1} / {numQ}</h2>
               
                <div className='timer timer-green'>
                    {seconds}
                </div> 

                <div className='q-frame typewriter'>
                    <p className=''> {decode(question)} </p>
                </div>    

                <Container>
                  <Row className='answer-frame'>
                    {/* <Col > - 
                      { buttons with different numbers of lines are not alligned :(
                        answers.map(a => (
                            <button className={a.color} key={a.answer} onClick={() => handleAnswerSelect(a.answer)}>
                                {decode(a.answer)}
                            </button>
                        ))
                      } 
                    </Col> */}
                    <Col >
                        <button className={answers[0].color} key={answers[0].answer} onClick={() => handleAnswerSelect(answers[0].answer)}>
                                {decode(answers[0].answer)}
                        </button>
                    </Col>
                    <Col >
                        <button className={answers[1].color} key={answers[1].answer} onClick={() => handleAnswerSelect(answers[1].answer)}>
                                {decode(answers[1].answer)}
                        </button> 
                    </Col>
                  </Row>
                  <Row className='answer-frame'>
                    <Col >
                        <button className={answers[2].color} key={answers[3].answer} onClick={() => handleAnswerSelect(answers[2].answer)}>
                                {decode(answers[2].answer)}
                        </button>
                    </Col>
                    <Col >
                        <button className={answers[3].color} key={answers[3].answer} onClick={() => handleAnswerSelect(answers[3].answer)}>
                                {decode(answers[3].answer)}
                        </button>
                    </Col>
                  </Row>
                </Container>    

                <div className='nav'>
                    <a href={'/main'} className='btn-nav btn-nav-l'>{'<< '}menu </a> 
                    <label className='cur-score'>  SCORE: {score} </label>
                </div>);
        </div>

        </div>);
    };

export default Question;
