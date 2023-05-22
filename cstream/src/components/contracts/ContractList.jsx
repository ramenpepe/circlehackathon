import React from 'react';
import './ContractList.css';

const ContractList = ({ contracts }) => {
  return (
    <div className="contract-list-container">
      <h2>Contract List</h2>

      <table>
        <thead>
          <tr>
            <th>Contract Address</th>
            <th>Status</th>
            <th>Milestone Completion</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.address}>
              <td>{contract.address}</td>
              <td>{contract.status}</td>
              <td>
                <div className="completion-bar">
                  <div
                    className="completion-level"
                    style={{ width: `${contract.completion}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractList;
