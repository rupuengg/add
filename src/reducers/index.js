import {combineReducers} from 'redux';
import valueReducer from './valueReducer';
import addReducer from './addReducer';

const rootReducers = combineReducers({
    value: valueReducer,
    add: addReducer
});

export default rootReducers;