import React from 'react';
import './Diagram.css';

const Diagram = ({ steps, direction, add, remove, select }) => {
  const handleBoxClick = (content) => {
    if (select) {
      select(content);
    }
  };

  return (
    <div className={`container ${direction}`}>
      <button className="button" style={{ background: "red" }} onClick={remove}>
        - Clear Milestones
      </button>
      <button className="button" onClick={add}>+ Add Milestone</button>
      {steps.map((step, index) => {
        switch (step.type) {
          case 'box':
            return ( 
              <div   key={index}>
              <div className="arrow-container down">
                <div className="arrow"></div>
                <div className="arrow delay"></div>
                </div>
                <div
                
                  id={step.id}
                  className="box"
                  onClick={() => handleBoxClick(step.content)}
                >
                  {step.content.milestoneName}
                </div>
              </div>
            );
          case 'wildcard':
            return <div key={index}>{step.content}</div>;
          case 'arrow':
            return (
              <div
                key={index}
                className={`arrow-container ${step.direction} ${step.invert ? 'invert' : ''}`}
              >
                <div className="arrow"></div>
                <div className="arrow delay"></div>
              </div>
            );
          case 'transaction':
            return <div key={index} className="transaction">{step.content}</div>;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Diagram;
