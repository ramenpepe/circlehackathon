import React from 'react';
import './WizardComponent.css';

const WizardComponent = ({
  currentStep,
  setCurrentStep,
  milestoneName,
  setMilestoneName,
  eventData,
  setEventData,
  verificationEndpoint,
  setVerificationEndpoint,
  verificationResponse,
  setVerificationResponse,
  releaseAmount,
  setReleaseAmount,
  counterparty,
  setCounterparty,
  contacts,
  onFinish,
}) => {
  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      // Validate the inputs before proceeding to the next step
      if (releaseAmount && counterparty) {
        if (onFinish) {
          var ret = {milestoneName: milestoneName, eventData: eventData, verificationEndpoint: verificationEndpoint,
            verificationResponse:verificationResponse,
            releaseAmount:releaseAmount,
            counterparty:counterparty}
          onFinish(ret); // Call the onFinish function from the props
          setCurrentStep(1);
          setMilestoneName('');
          setEventData('');
          setVerificationEndpoint('');
          setVerificationResponse('');
          setReleaseAmount(0);
          setCounterparty('');
        } else {
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
                value={milestoneName} placeholder={'500 manhours'}
                onChange={(e) => setMilestoneName(e.target.value)}
              />
            </label>

           

            {/* Verification endpoint */}
            <label>
              Verification Endpoint:
              <input
                type="text" placeholder={'https://reno-demo.adappter.xyz/api/manhours'}
                value={verificationEndpoint}
                onChange={(e) => setVerificationEndpoint(e.target.value)}
              />
            </label>
             {/* Additional fields based on your requirements */}
            {/* For example, event data object */}
            <label>
              Event Data Object:
              <textarea placeholder={'{project-name:"duxton"}'}
                value={eventData}
                onChange={(e) => setEventData(e.target.value)}
              />
            </label>
            <label>
              Verification Response:
              <textarea
                type="text"
                value={verificationResponse} placeholder={'status.data.hours > 500 '} asd
                onChange={(e) => setVerificationResponse(e.target.value)}
              ></textarea>
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
              Counterparty:<br></br>
              <select
                value={counterparty}
                onChange={(e) => setCounterparty(e.target.value)}
              >
                <option value="">Select Counterparty</option>
                {contacts.map((contact) => (
                  <option key={contact.id} value={contact.name}>
                    {contact.name}
                  </option>
                ))}
              </select>
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
