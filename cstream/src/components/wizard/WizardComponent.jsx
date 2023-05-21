import React, { useState } from 'react';
import './WizardComponent.css';

const WizardComponent = ({ onFinish }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [milestoneName, setMilestoneName] = useState('');
  const [eventData, setEventData] = useState({});
  const [verificationEndpoint, setVerificationEndpoint] = useState('');
  const [releaseAmount, setReleaseAmount] = useState(0);
  const [counterparty, setCounterparty] = useState('');

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      // Validate the inputs before proceeding to the next step
      if (releaseAmount && counterparty) {
        if (onFinish) {
          console.log("wizard finish");
          onFinish(); // Call the onFinish function from the props
        }else{
          console.log(onFinish);
        }
      } else {
        console.error('Please fill in all the required fields.');
      }
    }
  };

  return (
    <div className="wizard-container">
      <div className="wizard-steps">
        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
          <span>Step 1</span>
          <p>Milestone Information</p>
        </div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
          <span>Step 2</span>
          <p>Release Details</p>
        </div>
      </div>

      <div className="wizard-content">
        {currentStep === 1 && (
          <div>
            <h2>Milestone Information</h2>
            <label>
              Milestone Name:
              <input
                type="text"
                value={milestoneName}
                onChange={(e) => setMilestoneName(e.target.value)}
              />
            </label>

            {/* Additional fields based on your requirements */}
            {/* For example, event data object */}
            <label>
              Event Data Object:
              <textarea
                value={JSON.stringify(eventData)}
                onChange={(e) => setEventData(JSON.parse(e.target.value))}
              />
            </label>

            {/* Verification endpoint */}
            <label>
              Verification Endpoint:
              <input
                type="text"
                value={verificationEndpoint}
                onChange={(e) => setVerificationEndpoint(e.target.value)}
              />
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Release Details</h2>

            {/* Amount of money to be released */}
            <label>
              Amount to Release:
              <input
                type="number"
                value={releaseAmount}
                onChange={(e) => setReleaseAmount(parseFloat(e.target.value))}
              />
            </label>

            {/* Counterparty */}
            <label>
              Counterparty:
              <input
                type="text"
                value={counterparty}
                onChange={(e) => setCounterparty(e.target.value)}
              />
            </label>
          </div>
        )}
      </div>

      <div className="wizard-navigation">
        {currentStep === 1 && <button disabled>Previous</button>}
        {currentStep === 2 && (
          <button onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </button>
        )}
        <button onClick={handleNext}>
          {currentStep === 2 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default WizardComponent;
