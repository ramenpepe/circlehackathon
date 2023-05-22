import React, { useState } from 'react';
import './ProjectList.css';

const ProjectList = ({selectedProject, setSelectedProject, setActiveItem}) => {
  const initialProjects = [
    {
      id: 1,
      name: 'Residential Complex - Phase 1',
      description: 'Construct a residential complex consisting of 10 apartment buildings with 100 units each.',
      date: '2023-01-01',
      value: 5000000,
      status: 'In Progress',
    },
    {
      id: 2,
      name: 'Commercial Office Building',
      description: 'Build a modern commercial office building with 5 floors and state-of-the-art facilities.',
      date: '2023-02-01',
      value: 3000000,
      status: 'Completed',
    },
    {
      id: 3,
      name: 'Infrastructure Development - Road Expansion',
      description: 'Expand the existing road infrastructure to accommodate increased traffic and improve connectivity.',
      date: '2023-03-01',
      value: 2000000,
      status: 'In Progress',
    },
    // Add more initial construction projects as needed
  ];
  
  const [projects, setProjects] = useState(initialProjects);
  

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleAddProject = () => {
    if (name && description && date && value) {
      const newProject = { name, description, date, value };
      setProjects([...projects, newProject]);
      setName('');
      setDescription('');
      setDate('');
      setValue('');
    } else {
      console.error('Please fill in all the required fields.');
    }
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActiveItem('Milestones');
  };

  return (
    <div className="project-list-container">
      <h2>Projects</h2>

      <div className="project-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className={`project ${selectedProject === project ? 'selected' : ''}`} key={index}>
            <div className="project-info">
              <p>Name: {project.name}</p>
              <p>Description: {project.description}</p>
              <p>Date: {project.date}</p>
              <p>Value: {project.value}</p>
            </div>
            <div className="project-actions">
              <button onClick={() => handleSelectProject(project)}>Select</button>
              <button onClick={() => handleDeleteProject(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
