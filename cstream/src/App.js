import React, { useState } from 'react';
import './App.css';
import Diagram from "./components/diagram/Diagram";
import LeftNavBar from "./components/nav/LeftNavBar";
import ProjectList from "./components/project/ProjectList";
import AddressBook from "./components/address/AddressBook";
import ContractList from "./components/contracts/ContractList";
import WizardComponent from './components/wizard/WizardComponent';

function App() {
  const [activeItem, setActiveItem] = useState('Projects');
  const [milestones, setMilestones] = useState([]);
  const [deletebtnshow, setDeleteBtnShow] = useState(0);

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    // Perform additional actions based on the selected item if needed
  };
  const initialContacts = [
    { id: 1, name: 'John Doe', chain: 'Ethereum', address: '0x1234567890' },
    { id: 2, name: 'Jane Smith', chain: 'Algorand', address: '0x9876543210' },
    // Add more initial contacts as needed
  ];
  
  const [contacts, setContacts] = useState(initialContacts);

  const handleFinish = (msobj) => {
    console.log(milestones, msobj);
    setMilestones((prevMilestones) => [
      ...prevMilestones,
      { type: 'arrow', direction: 'down' },
      { type: 'box', content: msobj, id: 'newMilestone' },
    ]);
    setCurrentStep(1);
    setMilestoneName('');
    setEventData('');
    setVerificationEndpoint('');
    setVerificationResponse('');
    setReleaseAmount(0);
    setCounterparty('');
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const addMilestone = () => {
    console.log("Adding Milestone");
    setCurrentStep(1);
    setMilestoneName('');
    setEventData('');
    setVerificationEndpoint('');
    setVerificationResponse('');
    setReleaseAmount(0);
    setCounterparty('');
  };

  const removeMilestone = () => {
    console.log("Remove Milestone");
    setMilestones((prevMilestones) => [
    ]);
  };

  const selectMilestone = (content) => {
    console.log("Select Milestone", content);
    setCurrentStep(1);
    setMilestoneName(content.milestoneName);
    setEventData(content.eventData);
    setVerificationEndpoint(content.verificationEndpoint);
    setVerificationResponse(content.verificationResponse);
    setReleaseAmount(content.releaseAmount);
    setCounterparty(content.counterparty);
    // setMilestones([...milestones, { type: 'arrow', direction: 'down' }, { type: 'box', content: 'New Milestone', id: 'newMilestone' }]);
  };


  const handleContractDeployment = () => {
    milestones.forEach((milestone) => {
      // Deploy the milestone as a contract using the necessary data
      // Track the status of contract signing and milestone completion level
    });
  };

  const [contracts, setContracts] = useState([]);

  
  const [currentStep, setCurrentStep] = useState(1);
  const [milestoneName, setMilestoneName] = useState('');
  const [eventData, setEventData] = useState('');
  const [verificationEndpoint, setVerificationEndpoint] = useState('');
  const [verificationResponse, setVerificationResponse] = useState('');
  const [releaseAmount, setReleaseAmount] = useState(0);
  const [counterparty, setCounterparty] = useState('');

  return (
    <div className="App">
      <LeftNavBar activeItem={activeItem} handleNavItemClick={handleNavItemClick} />

      {activeItem === 'Milestones' && (
        <div class="milestonecon">
          <div className="wizard">
          <h3>{selectedProject && selectedProject.name ? selectedProject.name : '??'}</h3>

            <WizardComponent
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              milestoneName={milestoneName}
              setMilestoneName={setMilestoneName}
              eventData={eventData}
              setEventData={setEventData}
              verificationEndpoint={verificationEndpoint}
              setVerificationEndpoint={setVerificationEndpoint}
              verificationResponse={verificationResponse}
              setVerificationResponse={setVerificationResponse}
              releaseAmount={releaseAmount}
              setReleaseAmount={setReleaseAmount}
              counterparty={counterparty}
              setCounterparty={setCounterparty}
              onFinish={handleFinish}
              contacts={contacts} 
            />
          </div>

          <div className="milestones">
            <Diagram
              direction="vertical"
              steps={milestones}
              remove={removeMilestone}
              add={addMilestone}
              select={selectMilestone}
              setCurrentStep={setCurrentStep}
              setMilestoneName={setMilestoneName}
              setEventData={setEventData}
              setVerificationEndpoint={setVerificationEndpoint}
              setVerificationResponse={setVerificationResponse}
              setReleaseAmount={setReleaseAmount}
              counterparty={counterparty}
            />
          </div>
          <button className="button" style={{ background: "black" }} onClick={handleContractDeployment}>
  Deploy Milestone Contracts
</button>
        </div>
      )}
      {activeItem === 'Projects' && <div>
        <ProjectList selectedProject={selectedProject} setSelectedProject={setSelectedProject} setActiveItem={setActiveItem} />
        </div>}
      {activeItem === 'Contract Status' && <div><ContractList contracts={contracts} /></div>}
      {activeItem === 'Address Book' && <div>
        <AddressBook contacts={contacts} setContacts={setContacts} />
        </div>}
    </div>
  );
}

export default App;
