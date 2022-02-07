const initState = { 
    topic: "", 
    difficulty: "",
    index: 0
};

const gameReducer = (state=initState, action) => {
    switch(action.type) {
        case 'TEST': 
            return state;
        // case 'LOADING': 
        //     return { ...state, location: action.payload, loading: true };
        // case 'LOAD_RESULT':
        //     return { ...state, result: action.payload, loading: false, error: false };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, loading: false };
        
        default:
            return state;    
    };
};

export default gameReducer;