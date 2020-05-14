import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './QuestionPreview.module.css';

class QuestionPreview extends React.Component {
  render() {
    const { id, author, optionOne } = this.props;
    return (<div className={styles.questionPreview}>
      <div>
        <h4 className={styles.title}>{author.name} asks:</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img
            height={120}
            width={120}
            src={require(`../../assets/images/${author.avatarURL}.png`)}
            alt="user avatar"
          />
        </div>
        <div className={styles.details}>
          <h3>Would you rather</h3>
          <div className={styles.option}>
            ...{optionOne.text}...
          </div>
          <div className={styles.viewPoll}>
            <Link to={`/questions/${id}`}>View Poll</Link>
          </div>
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  const question = state.questions.byId[ownProps.id];
  const author = state.users.byId[question.author];
  return {
    ...question,
    author: author,
  };
}

export default connect(mapStateToProps)(QuestionPreview);
