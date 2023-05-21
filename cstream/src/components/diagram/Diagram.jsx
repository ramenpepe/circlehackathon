import React from 'react';
import "./diagram.css";

const Diagram = ({ steps, direction , select }) => {
  return (
    <div className={`container ${direction}`}>
      {steps.map((step, index) => {
        switch (step.type) {
          case 'box':
            return <div key={index} id={step.id} className="box" onclick={select(step.content)}>{step.content}</div>;
            case 'wildcard':
            return <div>{step.content}</div>;  
          case 'arrow':
            return (
              <div key={index} className={`arrow-container ${step.direction} ${step.invert ? 'invert' : ''}`}>
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