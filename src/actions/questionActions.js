import {
  ADD_ANSWER,
  ADD_QUESTION,
  DELETE_QUESTION,
  SELECT_CORRECT_ANSWER,
  ERROR,
} from '../types/questionTypes';

export const addQuestionOrAnwserAction =
  ({ ask, answer }) =>
  (dispatch, getState) => {
    const { ask: preAsk, answers: preAnswers } =
      getState().questionReducers.question;
    ask &&
      ask !== preAsk &&
      dispatch({
        type: ADD_QUESTION,
        payload: ask,
      });
    answer &&
      preAnswers.every((ans) => ans.answer !== answer) &&
      dispatch({
        type: ADD_ANSWER,
        payload: { answer, votes: 0 },
      });
  };

export const deleteQuestionAction = () => (dispatch) => {
  dispatch({
    type: DELETE_QUESTION,
  });
};

export const selectCorrectAnswerAction = (correctAnswer) => (dispatch) => {
  dispatch({
    type: SELECT_CORRECT_ANSWER,
    payload: correctAnswer,
  });
};
