import React from 'react';
import { Tabs } from '../Tabs';

const tabs = [{
  label: 'Unanswered questions',
  content: () => <div>UNA Questions</div>,
},
{
  label: 'Answered questions',
  content: () => <div>ANS Questions</div>,
},
{
  label: 'Test questions',
  content: () => <div>TEST Questions</div>,
}]

class Home extends React.Component {
  render() {
    return <div>
      <Tabs tabs={tabs} />
    </div>
  }
}

export default Home;
