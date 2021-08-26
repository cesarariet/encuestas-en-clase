import './style/Question.css';

const Question = (props) => {
  const handlerClick = props.handlerClick;
  const question = props.question;

  return (
    <>
      <div className="question">{question.question}</div>
      <div className="answers">
        <div className="answers">
          {question.answers.map((answer, index) => (
            <div className="answer" key={index}>
              <div className="answer__text">{answer.answer}</div>
              <div className="answer__votes">{answer.votes}</div>
              <button type="button" onClick={handlerClick}>
                Votar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
