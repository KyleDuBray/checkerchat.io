import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  game: gameReducer,
  user: userReducer,
  chat: chatReducer,
  auth: authReducer,
  errors: errorReducer,
});
