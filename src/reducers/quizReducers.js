import {
  ADD_QUESTION_ON_QUIZ,
  REMOVE_QUIZ,
  REMOVE_QUESTION_ON_QUIZ,
  ERROR_QUIZ,
} from '../types/quizTypes.js';

const INITIAL_STATE = {
  quiz: {
    questions: [],
    loading: false,
    error: false,
  },
};

export default function quizReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_QUESTION_ON_QUIZ: {
      const questions = state.quiz.questions.concat(action.payload);
      return { ...state, quiz: { questions, loading: false, error: false } };
    }
    case REMOVE_QUESTION_ON_QUIZ: {
      const questions = state.quiz.questions.filter(
        (v, i) => i !== parseInt(action.payload)
      );
      return { ...state, quiz: { questions, loading: false, error: false } };
    }
    case REMOVE_QUIZ: {
      return {
        quiz: {
          questions: [],
          loading: false,
          error: false,
        },
      };
    }
    default:
      return state;
  }
}
