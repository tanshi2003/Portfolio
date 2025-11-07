import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projects = [
    {
      image: '/images/work-1.png',
      title: 'Tic Tac Toe Game',
      description: 'Python-based two-player game in a 3x3 grid.',
      github: 'https://github.com/tanshi2003/Tic-tac-toe',
      demo: 'https://tic-tac-toe-1-lqzs.onrender.com',
    },
    {
      image: '/images/work-2.png',
      title: 'Snake Game (Python)',
      description: 'Classic snake game with food-eating and self-collision logic.',
      github: 'https://github.com/tanshi2003/Snakegame',
      demo: '',
    },
    {
      image: '/images/work-5.png',
      title: 'Rock Paper Scissors',
      description: 'Python CLI game where you battle the computer.',
      github: 'https://github.com/tanshi2003/Rock-Paper-Scisssors',
      demo: 'https://rpsbytanshi.netlify.app/',
    },
    {
      image: '/images/work-4.png',
      title: 'Lost and Found Portal',
      description: 'Django-based platform to report & search items in campus.',
      github: 'https://github.com/tanshi2003/Lost-and-Found-Portal',
      demo: 'https://lost-and-found-portal-b7gw.onrender.com/',
    },
    {
      image: '/images/work-7.png',
      title: 'Hotel Management System',
      description: 'Django app for managing bookings, staff & rooms.',
      github: 'https://github.com/tanshi2003/Hotel-Management-System',
      demo: 'https://hotel-management-system-k8f0.onrender.com',
    },
    {
      image: '/images/work-8.png',
      title: 'Password Manager',
      description: 'A secure password storage and generator tool.',
      github: 'https://github.com/tanshi2003/Password_Manager',
      demo: 'https://password-manager-pptl.onrender.com/',
    },
    {
      image: '/images/work-9.png',
      title: 'TeleCRM',
      description: 'Role-based CRM for managing leads, users, campaigns.',
      github: 'https://github.com/tanshi2003/telecrm_db',
      demo: 'https://telecrmio.netlify.app/',
    },
    {
      image: '/images/work-10.png',
      title: 'My Music',
      description: 'An elegant web app to play and manage your favorite music with a sleek “Now Playing” view.',
      github: 'https://github.com/tanshi2003/My-Music',
      demo: 'https://mymusictk.netlify.app/',
    },
    {
      image: '/images/work-11.png',
      title: 'Email AI Agent',
      description: 'Developed a Python-based Email AI Agent that automates Gmail inbox management with smart content analysis and automated responses',
      github: 'https://github.com/tanshi2003/Email-AI-Agent.git',
      // demo: 'https://mymusictk.netlify.app/',
    },
    {
      image: '/images/work-12.png',
      title: 'AI Resume Analyzer',
      description: 'Created an AI Resume Analyzer that provides ATS scoring and job-market insights using Python, NLP, and Streamlit',
      github: 'https://github.com/tanshi2003/AI-Resume-Analyzer.git',
      // demo: 'https://mymusictk.netlify.app/',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="proj-content">
          {projects.map((project, index) => (
            <div className="work" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                      <span style={{ marginLeft: '6px' }}>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span style={{ marginLeft: '6px' }}>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
