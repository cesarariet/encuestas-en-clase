import {
  ADD_QUESTION,
  DELETE_QUESTION,
  ADD_ANSWER,
  SELECT_CORRECT_ANSWER,
  ERROR,
} from '../types/questionTypes';

const INITIAL_STATE = {
  question: {
    ask: '',
    answers: [],
    correctAnswer: null,
  },
};

export default function questionReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const question = { ...state.question, ask: action.payload };
      return { ...state, question };
    }

    case DELETE_QUESTION: {
      return {
        ...state,
        question: {
          ask: '',
          answers: [],
          correctAnswer: null,
        },
      };
    }

    case ADD_ANSWER: {
      const answers = state.question.answers.concat(action.payload);
      const question = { ...state.question, answers };
      return { ...state, question };
    }

    case SELECT_CORRECT_ANSWER: {
      const question = { ...state.question, correctAnswer: action.payload };
      return { ...state, question };
    }

    case ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
}
