# circlehackathon

the case for this project is for projects to deal with milestone management, where funds are escrowed by  smart contracts and using trusted erp system and availability of api endpoints to monitor milestone deliveries and releasing funds automatically. By using  circle's api, user can facilitate the receipt of usdc across different networks, in a prompt and safe manner.


circle hackthon 2023
Deliverables:
FE/ 
Milestone controller; a wizard to setup conditions and funding tranche, to send payment request to paymaster, (cstream)

- allows users to setup milestones based on certain criteria, typically facilitated by available online data. these can typically track for man hours, consummables, sales, signed documents, ticket completion and many more. 
- by defining the query, endpoint and expected results.
- define amount of requested funds per milestone, determine who you are seeking funds from, deploy milestones as smart contracts for fund custody,
- paymaster interacts with contract and locks up fund for the agreed milestones. 
- fund is released when detected defined milestone validation.

Milestone monitor widget; widget that reads the conditions of milestone. (cannot be delivered due to time constraint)

BE/ (cannot be delivered due to time constraint)
a group of api endpoints to be called to trigger circle's api under specific conditions 
- to request for for fund
- to initate transfer of fund to custodian contract address
- to initiate fund streaming from custodian contract address to project owner based on events. (e.g datetime, milestones deliverables ...)
