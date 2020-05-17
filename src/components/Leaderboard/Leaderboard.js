import React from 'react';
import { Score } from '../Score';
import { connect } from 'react-redux';

class Leaderboard extends React.Component {
  render() {
    const { leaderboard = [] } = this.props;
    return <div>
      {leaderboard.map((user) => <Score key={user.id} {...user} />)}
    </div>
  }
}

const mapStateToProps = ({ users }) => {
  return {
    leaderboard: users.allIds.map(id => {
      const { answers, questions, ...user } = users.byId[id];
      return {
        ...user,
        created: questions.length,
        answered: Object.keys(answers).length,
        score: questions.length + Object.keys(answers).length,
      };
    })
      .sort((a, b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(Leaderboard);
