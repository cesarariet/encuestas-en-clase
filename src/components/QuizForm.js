import React from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import {
  addQuestionOrAnwserAction,
  deleteQuestionAction,
  selectCorrectAnswerAction,
} from '../actions/questionActions';
import { addQuestionOnQuizAction } from '../actions/quizActions';

class QuizForm extends React.Component {
  quizId = this.props.quizId;

  addQuestionOrAnwser = () => {
    const ask = document.querySelector('#ask').value;
    const answer = document.querySelector('#answer').value;
    this.props.addQuestionOrAnwserAction({ ask, answer });
  };
  selectCorrectAnswer = (e) => {
    const correctAnswer = e.target.parentNode.getAttribute('value');
    this.props.selectCorrectAnswerAction(correctAnswer);
  };

  render() {
    return (
      <>
        <h1>Cuestionario: {this.quizId}</h1>
        <form id="newQuiz">
          <label>
            Pregunta:
            <input type="text" name="question" id="ask" />
          </label>
          <br />
          <label>
            Respuesta:
            <input type="text" name="answer" id="answer" />
          </label>
          <br />
          <button type="button" onClick={this.addQuestionOrAnwser}>
            Agregar
          </button>
        </form>
        <Question question={this.props.question}>
          <button type="button" onClick={this.selectCorrectAnswer}>
            Elegir Correcta
          </button>
        </Question>
        {!this.props.question.correctAnswer ? (
          <h2>Elegir respuesta correcta</h2>
        ) : (
          <h2>
            La respuesta correcta es{' '}
            {parseInt(this.props.question.correctAnswer) + 1}
          </h2>
        )}
        <button type="button" onClick={this.props.addQuestionOnQuizAction}>
          --------------- Agregar a Encuesta --------------
        </button>
        <br />
        <button type="button" onClick={this.props.deleteQuestionAction}>
          ------------ Borra pregunta -------------
        </button>
      </>
    );
  }
}

function mapStateToProps(reducers) {
  return { ...reducers.questionReducers, ...reducers.quizReducers };
}
const mapDispatchToProps = {
  addQuestionOrAnwserAction,
  deleteQuestionAction,
  selectCorrectAnswerAction,
  addQuestionOnQuizAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
