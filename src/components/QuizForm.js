import { useState } from 'react';
import Question from './Question';
const QuizForm = (props) => {
  const quizId = props.quizId;
  const initialState = {
    _id: String(parseInt(Math.random() * 10000000)),
    question: '',
    quizId,
    answers: [],
  };
  const [newQuestion, setQuestion] = useState(initialState);
  function addAnswer() {
    const question = document.querySelector('#question').value;
    const answer = document.querySelector('#answer').value;
    const answers = newQuestion.answers.concat({ answer, votes: 0 });
    setQuestion({ ...newQuestion, question, answers });
  }
  function selectCorrectAnwer(e) {
    e.target.parentNode.classList.toggle('answer__selected');
    setQuestion({ ...newQuestion, correctAnswer: e.target.value });
  }
  function sendQuestion() {}
  function resetQuestion() {
    setQuestion(initialState);
  }
  return (
    <>
      <form id="newQuiz">
        <label>
          Pregunta:
          <input type="text" name="question" id="question" />
        </label>
        <label>
          Respuesta:
          <input type="text" name="answer" id="answer" />
          <button type="button" onClick={addAnswer}>
            Agregar respuesta
          </button>
        </label>
      </form>
      <Question question={newQuestion} handlerClick={selectCorrectAnwer} />
      <button type="button" onClick={sendQuestion}>
        --------------- Enviar pregunta -------------------
      </button>
      <button type="button" onClick={resetQuestion}>
        {' '}
        ------------ Borra pregunta -------------
      </button>
    </>
  );
};

export default QuizForm;
