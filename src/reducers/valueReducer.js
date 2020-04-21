const defaultValue = {
    valueA: 0,
    valueB: 0,
    total: 0
};

const valueReducer = (state=defaultValue, action) => {
    switch(action.type){
        case 'SETA':
            return {...state, valueA: action.payload};
        case 'SETB':
            return {...state, valueB: action.payload};
        case 'ADD':
            return {...state, total: state.valueA + state.valueB};
        default:
            return state;
    }
};

export default valueReducer;