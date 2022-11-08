import { combineReducers } from 'redux'
import { coinReducer } from './coins/coinsReducer';

const rootReducer = combineReducers({
    coinState : coinReducer
})

export default rootReducer;