import { combineReducers } from 'redux';
import accountReducer from '../Account/Reducer';

const rootReducer = combineReducers({
  account: accountReducer,
});
export default rootReducer;
