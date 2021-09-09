import React from 'react';
import Question from '../components/Question';
import { connect } from 'react-redux';

class Quiz extends React.Component {
  render() {
    return (
      <>
        <div className="quiz">
          {this.props.quiz.questions.map((question, index) => (
            <div value={index}>
              <Question question={question} key={index}></Question>
              {this.props.children}
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.quizReducers;
};

export default connect(mapStateToProps)(Quiz);
