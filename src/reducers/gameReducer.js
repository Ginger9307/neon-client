const initState = { 
    room: "", 
    amount: "", 
    category: "",
    difficulty: "",
    player: "",
    numQ: 0,
    index: 0,
    questions: [],
    score: 0, 
    finishQuiz: false,
    loading: false,
    admin: false,
    playerScores: [],
    multiplayer: false,
    // gameResult: ''
};

// shuffling array function 
const getShuffled = arr => {
    if (arr.length === 1) {return arr};
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...getShuffled(arr.filter((_, i) => i != rand))];
};
// classes for answer buttons 
const btnColors = ['btn-a-g', 'btn-a-p', 'btn-a-y', 'btn-a-o']

const gameReducer = (state=initState, action) => {
    switch(action.type) {
        case 'SETTING': {
            console.log(action.payload)
            return {...state, room: action.payload.room, amount: action.payload.amount, category: action.payload.category, difficulty: action.payload.difficulty, player: action.payload.name, numQ: action.payload.NUMQ, admin: true};
        }
        case 'LOAD_QUESTIONS': {
            console.log("state",state);
            console.log("payload",action.payload)
            
            // create new key with all answers which shuffled and class for btn
            const newQuestions = action.payload.map(a => {
                console.log("a", a)
                // work out answers
                const answers_pre = getShuffled([
                                    ...a.incorrect_answers,
                                    a.correct_answer,
                                ]);
                // work out color for every answer
                let btnColors = ['btn-answer btn-a-g', 'btn-answer btn-a-p', 'btn-answer btn-a-y', 'btn-answer btn-a-o', 'btn-answer btn-a-f', 'btn-answer btn-a-b']
                const answers = answers_pre.map(a => {
                    let obj = {};
                    obj["answer"] = a;
                    const index = Math.floor(Math.random() * (btnColors.length))
                    console.log("index", index)
                    const answColor = btnColors.splice(index, 1).toString();
                    btnColors = btnColors.filter(c => c !== answColor)
                    console.log(answColor, btnColors) ;
                    obj["color"] = answColor;
                    console.log(obj)
                    return obj
                })
                console.log(answers);
                a["answers"] = answers;               
                return a;
            });
            console.log(newQuestions);
            return { ...state, questions: newQuestions, loading: true };
        }
        case 'RECORD_ANSWER': {
            const newIndex = state.index + 1;
            const newScore = state.score + action.payload;
            const finish = (newIndex === state.numQ)? true : false;
            console.log('answer', newIndex, state.score, action.payload, finish)
            return { ...state, score: newScore, index: newIndex, finishQuiz: finish };
        }
        case 'LOAD_SETTINGS': {
            console.log('load set', action.payload)
            return { ...state, numQ: action.payload.qnum, difficulty: action.payload.diff };
        }
        case 'LOAD_PLAYER': {
            return { ...state, room: action.payload.room, player: action.payload.name };
        }
        case 'RECORD_PLAYER_RESULT': {
            return { ...state, playerScores: [...state.playerScores, { player: action.payload.playerName, score: action.payload.score }]};
        }
        case 'LOAD_GAME_MODE': {
            return { ...state, multiplayer: true }
        }
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        
        default:
            return state;    
    };
};

export default gameReducer;