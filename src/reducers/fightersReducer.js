const fightersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_FIGHTERS':
            return action.payload;
            default:
                return state;
    }
    
};

export default fightersReducer;