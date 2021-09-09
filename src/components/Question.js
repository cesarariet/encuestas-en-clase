import './style/Question.css';

const Question = (props) => {
  const question = props.question;

  return (
    <div className="questionWrapper">
      <h2>Pregunta:</h2>
      <div className="question">{question.ask}</div>
      <div className="answers">
        <div className="answers">
          {question.answers.map((answer, index) => (
            <div className="answer" key={index} value={index}>
              <h3>Respuesta {index + 1}:</h3>
              <div className="answer__text">{answer.answer}</div>
              {props.children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
