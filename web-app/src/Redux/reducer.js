import { combineReducers } from 'redux';
import userReducer from './userReducer';
import taxiReducer from './taxiReducer'

const reducer = combineReducers({userReducer, taxiReducer});

export default reducer;