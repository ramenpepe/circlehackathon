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

  const [isLoading, setIsLoading] = useState(false);
  

  const handleFinish = (msobj) => {
    console.log(milestones, msobj);

    const isDuplicate = milestones.some((milestone) => milestone.content.milestoneName === msobj.milestoneName);

    if (isDuplicate) {
      console.log(`Milestone with name '${msobj.milestoneName}' already exists. Skipping addition.`);
      return;
    }

    setMilestones((prevMilestones) => [
      ...prevMilestones,
     
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

  const deployMilestoneContract = (milestone) => {
    // Generate a random EVM-based contract address
    const contractAddress = generateRandomContractAddress();
  
    // Update the milestone object with the contract address

  return  contractAddress;
    // Implement the logic to track the status of contract signing and milestone completion level
  };
  
  const generateRandomContractAddress = () => {
    // Generate a random hexadecimal string as the contract address
    const hexCharacters = '0123456789ABCDEF';
    let contractAddress = '0x';
  
    for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      contractAddress += hexCharacters[randomIndex];
    }
  
    return contractAddress;
  };

  const getChainfromName = (name) => {
   
 const contact = contacts.find((c) => c.name === name );

  if (contact) {
    // Contact found, return the contact information
    return contact.chain;
  } else {
    // Contact not found, return null or handle the case as needed
    return null;
  }

  };
  
  const retrieveMilestoneData = (milestone) => {
    // Implement the logic to retrieve the milestone data based on the milestone object
    // You can access the properties of the milestone object and return the necessary data
    const milestoneData = {
      name: milestone.name,
      eventData: milestone.eventData,
      verificationEndpoint: milestone.verificationEndpoint,
      verificationResponse: milestone.verificationResponse,
      releaseAmount: milestone.releaseAmount,
      counterparty: milestone.counterparty,
      // Add other properties as needed
    };
  
    return milestoneData;
  };


  const handleContractDeployment = () => {
    const updatedContracts = [...contracts]; // Create a copy of the contracts array
    
   
   
    milestones.forEach((milestone) => {
      // Check if the milestone has already been deployed
      const existingContract = updatedContracts.find((contract) => contract.name === milestone.content.milestoneName);
  
      if (existingContract) {
        console.log("exists",milestone.content.milestoneName); 
        console.log(`Milestone '${milestone.name}' has already been deployed. Skipping deployment.`);
       
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);  }, 15000); 
  
      // Deploy the milestone as a contract using the necessary data
      const deployedContract = deployMilestoneContract(milestone);
      const chain = getChainfromName(milestone.content.counterparty)
      // Implement the logic to track the status of contract signing and milestone completion level
      // For example, you can update the contract status and completion level based on external systems or events
  
      // Create a new contract object with the deployed milestone details
      const newContract = {
        name: milestone.content.milestoneName,
        contractAddress: deployedContract,
        blockchain: chain,
        releaseAmount: milestone.content.releaseAmount,
        status: 'Pending',
        completionLevel: 0,
      };
  
      // Add the new contract to the updatedContracts array
      updatedContracts.push(newContract);
  
      // Log the deployed contract details
      console.log('Deployed Contract:', newContract);
    
   
    });
  
    // Update the contracts state with the updatedContracts array
    setContracts(updatedContracts);
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
    <div className="App ">
       {isLoading && 
       <div class="loading-container">
       <div class="loading-circle"></div>
       <div class="loading-circle"></div>
       <div class="loading-circle"></div>
       <div class="loading-circle"></div>
       <div class="loading-text">
       <h3>Deploying Contracts</h3>
       </div>
     </div>
    
       }
      <LeftNavBar activeItem={activeItem} handleNavItemClick={handleNavItemClick} />

      {activeItem === 'Milestones' && (
        <div class="milestonecon">
          <div className="wizard">
          <h3>{selectedProject && selectedProject.name ? selectedProject.name : <div class="Block">-Select a Project-</div>}</h3>

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
          <button className="button" style={{ background: "black" ,width: "100%"}} onClick={handleContractDeployment}>
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
