import {
  ADD_QUESTION_ON_QUIZ,
  REMOVE_QUESTION_ON_QUIZ,
  REMOVE_QUIZ,
  ERROR_QUIZ,
} from '../types/quizTypes';
import { DELETE_QUESTION } from '../types/questionTypes';

export const addQuestionOnQuizAction = () => (dispatch, getState) => {
  const question = getState().questionReducers.question;
  question.ask !== '' &&
    question.answers.length > 0 &&
    dispatch({
      type: ADD_QUESTION_ON_QUIZ,
      payload: question,
    });
  dispatch({
    type: DELETE_QUESTION,
  });
};

export const removeQuestionOnQuizAction = (index) => (dispatch) => {
  dispatch({
    type: REMOVE_QUESTION_ON_QUIZ,
    payload: index,
  });
};
