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
    playerScores: []
};


const gameReducer = (state=initState, action) => {
    switch(action.type) {
        case 'SETTING': {
            console.log(action.payload)
            return {...state, room: action.payload.room, amount: action.payload.amount, category: action.payload.category, difficulty: action.payload.difficulty, player: action.payload.name, numQ: action.payload.NUMQ, admin: true};
        }
        case 'LOAD_QUESTIONS': {
            console.log(state);
            return { ...state, questions: action.payload, loading: true };
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
            return { ...state, playerScores: [...state.playerScores, { player: action.payload.playerName, score: action.payload.score }] };
        }
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        
        default:
            return state;    
    };
};

export default gameReducer;