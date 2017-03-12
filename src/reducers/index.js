import { combineReducers } from 'redux';
import User from './user'

const rootReducer = combineReducers({
    state: (state = {}) => state,
    user: User
});

export default rootReducer;