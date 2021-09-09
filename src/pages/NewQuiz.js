import Quiz from './Quiz';
import QuizForm from '../components/QuizForm';
import './style/newQuiz.css';
import { connect } from 'react-redux';
import { removeQuestionOnQuizAction } from '../actions/quizActions';

const NewQuiz = (props) => {
  const quizId = props.match.params.quizId;
  const deleteQuestionOnQuiz = (e) => {
    const index = e.target.parentNode.getAttribute('value');
    props.removeQuestionOnQuizAction(index);
  };

  return (
    <div className="quizCreator">
      <div className="newQuiz">
        <QuizForm quizId={quizId} />
      </div>

      <div className="quiz">
        <Quiz quizId={quizId}>
          <button type="button" onClick={deleteQuestionOnQuiz}>
            Borrar pregunta
          </button>
        </Quiz>
      </div>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.quizReducers;
};

const mapDispatchToProps = { removeQuestionOnQuizAction };

export default connect(mapStateToProps, mapDispatchToProps)(NewQuiz);
