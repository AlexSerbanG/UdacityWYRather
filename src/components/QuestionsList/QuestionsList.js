import React from 'react';
import { QuestionPreview } from '../QuestionPreview';
import { connect } from 'react-redux';

class QuestionsList extends React.Component {
  render() {
    const { questions } = this.props;
    return (<div>
      {questions.map(id => <QuestionPreview key={id} id={id} />)}
    </div>)
  }
}

const mapStateToProps = ({ questions, users, auth }, ownProps) => {
  const userAnsweredQuestions = Object.keys(users.byId[auth.authedUser].answers);
  return {
    questions: questions.allIds.filter(question => (userAnsweredQuestions.includes(question) ^ ownProps.type === 'Answered'))
  }
}

export default connect(mapStateToProps)(QuestionsList);
