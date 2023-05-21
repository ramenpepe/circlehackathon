import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Diagram from "./components/diagram/Diagram"
import WizardComponent from './components/wizard/WizardComponent';

function App() {
  const [milestones, setMilestones] = useState([
    { type: 'box', content: 'Source Chain', id: 'sourceChain' },
    { type: 'arrow', direction: 'down' },
    { type: 'box', content: 'Source Chain', id: 'sourceChain' },
  ]);

  const handleFinish = useCallback(() => {
    console.log(milestones);
    setMilestones([...milestones, { type: 'arrow', direction: 'down' },{type: 'box', content: 'New Milestone', id: 'newMilestone' }]);
  }, [milestones]);

  const addMilestone = () => {
    console.log("Adding Milestone");
    setMilestones([...milestones, { type: 'arrow', direction: 'down' }, {type: 'box', content: 'New Milestone', id: 'newMilestone' }]);
  }

  const selectMilestone = (content) => {
    console.log("se Milestone",content);
   // setMilestones([...milestones, { type: 'arrow', direction: 'down' }, {type: 'box', content: 'New Milestone', id: 'newMilestone' }]);
  }

  return (
    <div className="App">
      <div className="milestones">
        <Diagram
          direction="vertical"
          steps={milestones} 
        />
        <button className="button" onClick={addMilestone}>+ Add Milestone</button>
      </div>
      <div className="wizard">
        <WizardComponent onFinish={handleFinish} />
      </div>
      {milestones.toString}
    </div>
  );
}

export default App;
