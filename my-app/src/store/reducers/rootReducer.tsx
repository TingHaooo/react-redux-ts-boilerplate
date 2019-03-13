import { combineReducers } from "redux";
import helloReducer from './helloReducer';

const rootReducer = combineReducers({
   helloStore: helloReducer
});

export default rootReducer;