const defaultState = {
    firstValue: 0,
    secondValue: 0,
    total: 0,
    list: [{
        Title: 'Test'
    },{
        Title: 'Test1'
    }]
}

const addReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'SET_FIRST_VALUE':
            return {...state, firstValue: action.payload};
        case 'SET_SECOND_VALUE':
            return {...state, secondValue: action.payload};
        case 'SET_TOTAL':
            return {...state, total: state.firstValue + state.secondValue};
        case 'ADD_ITEM': 
            return {...state, list: state.list.concat(action.payload)};
        default:
            return state;
    }
}

export default addReducer;