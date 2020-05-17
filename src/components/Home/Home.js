import React from 'react';
import { Tabs } from '../Tabs';
import { QuestionsList } from '../QuestionsList';

const QuestionTypes = {
  Answered: "Answered",
  Unanswered: "Unanswered",
};

const tabs = [{
  label: 'Unanswered questions',
  content: () => <QuestionsList type={QuestionTypes.Answered} />
},
{
  label: 'Answered questions',
  content: () => <QuestionsList type={QuestionTypes.Unanswered} />
}];

class Home extends React.Component {
  render() {
    return <div>
      <Tabs tabs={tabs} />
    </div>
  }
}

export default Home;
