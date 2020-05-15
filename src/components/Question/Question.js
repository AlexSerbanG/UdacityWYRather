import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Question.module.css';
import Avatar from '../_common/Avatar/Avatar';
import { Poll } from '../Poll';

class Question extends React.Component {
  render() {
    const { author, hasAnswered, optionOne, optionTwo } = this.props;
    return (<div className={styles.question}>
      <div>
        <h4 className={styles.title}>{author.name} asks:</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <Avatar avatarUrl={author.avatarURL} width={160} height={160} />
        </div>
        {!hasAnswered && <Poll
          options={[
            { label: optionOne.text, value: optionOne.text },
            { label: optionTwo.text, value: optionTwo.text },
          ]}
        />}
        {hasAnswered && <div>RESULTS</div>}

      </div>
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  const question = state.questions.byId[ownProps.match.params.id];
  const author = state.users.byId[question.author];
  const hasAnswered = state.users.byId[state.auth.authedUser].answers[ownProps.match.params.id] !== undefined;
  return {
    ...question,
    author,
    hasAnswered,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
