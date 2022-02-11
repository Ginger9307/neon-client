import axios from 'axios';
// for local test
import questions from './questions';

// NUMBER of QUESTIONS
const NUMQ = 5;

// *** ACTIONS
// set parameters for quiz
export const setting = (room, amount, category, difficulty, name, NUMQ) => ({ type: 'SETTING', payload: { room, amount, category, difficulty, name, NUMQ } });

// load questions
export const loadQuestions = (questions) => ({ 
    type: 'LOAD_QUESTIONS',
    payload: questions
});

// load qnum
export const loadSettings = (diff,qnum) => ({ 
    type: 'LOAD_SETTINGS',
    payload: { diff, qnum }
});

export const loadPlayer = (room,name) => ({ 
    type: 'LOAD_PLAYER',
    payload: { room, name }
});

export const loadGameMode = () => ({
    type: 'LOAD_GAME_MODE'
})

// update score & increase index
export const recordAnswer = (curScore) => ({
    type: 'RECORD_ANSWER',
    payload: curScore
});

export const recordPlayerResult = (playerName, score) => ({
    type: 'RECORD_PLAYER_RESULT',
    payload: { playerName, score }
});


// *** FUNCTIONS
// create game for game parameters and get questions
export const createGame = (room, amount, category, difficulty, name) => {
    console.log("create game")
    return async (dispatch) => {
        dispatch(setting(room, amount, category, difficulty, name, NUMQ));
        try {
        //      create room via socket.io and get questions
  
            const questions = await fetchQuestions(amount, category, difficulty);
            console.log(questions)
            dispatch(loadQuestions(questions));
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message });
        };
    };
};


// post score to server 
export const saveScore = (score, player) => {
    console.log("post score", score)
    return async (dispatch) => {
        try {
            await postScore(score, player);
        } catch (err) {
            console.warn(err.message);
        }
    }
}

// Helpers
// get questions data
const fetchQuestions = async (amount, category, difficulty) => {
    console.log(amount, category, difficulty)
    console.log("fetch")
    console.log(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`)             
    try {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
        return (data.results);
    } catch(err) {
        throw new Error(err.message)
    }
};

const postScore = async (score, player) => {

    await fetch (`https://neon-reactor.herokuapp.com/players`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: player})
    })

   await fetch (`https://neon-reactor.herokuapp.com/players/${player}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({score: score})
    })

    await console.log(score);
}
