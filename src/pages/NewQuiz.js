import Quiz from './Quiz';
import QuizForm from '../components/QuizForm';
const NewQuiz = (props) => {
  const quizId = props.match.params.quizId;
  return (
    <>
      <div className="newQuiz">
        <QuizForm quizId={quizId} />
      </div>

      <div className="quiz">
        <Quiz />
      </div>
    </>
  );
};

export default NewQuiz;
