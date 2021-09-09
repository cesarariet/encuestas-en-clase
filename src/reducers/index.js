import { combineReducers } from 'redux';
import questionReducers from './questionReducers';
import quizReducers from './quizReducers';

export default combineReducers({
  questionReducers,
  quizReducers,
});
