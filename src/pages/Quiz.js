import Question from '../components/Question';
import { moks } from '../moks/moks';

const voteQuestion = (e) => {
  e.target.parentNode.classList.toggle('answer__selected');
  window.renderMathInElement(document.body);
};

const Quiz = (props) => {
  // const quiz = props.quiz;
  const quiz = moks.data;
  return (
    <>
      <div className="quiz">
        {quiz.map((question) => (
          <Question
            question={question}
            key={question._id}
            handlerClick={voteQuestion}
          />
        ))}
      </div>
    </>
  );
};

export default Quiz;
