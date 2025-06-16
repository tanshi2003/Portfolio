import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      image: '/images/work-1.png',
      title: 'Tic Tac Toe',
      description: 'Python-based two-player game in a 3x3 grid.',
      link: 'https://github.com/tanshi2003/Tic-tac-toe/blob/main/tic%20tac%20toe.py',
    },
    {
      image: '/images/work-2.png',
      title: 'Snake Game',
      description: 'Classic snake game with food-eating and self-collision logic.',
      link: 'https://github.com/tanshi2003/Snakegame',
    },
    {
      image: '/images/work-3.jpg',
      title: 'Restaurant Website',
      description: 'Static site built using HTML and CSS for food lovers.',
      link: 'https://restaurant1tanshi.netlify.app/',
    },
    {
      image: '/images/work-6.png',
      title: 'Spotify Clone',
      description: 'Music app clone built using HTML, CSS, JS.',
      link: 'https://github.com/tanshi2003/Spotify-clone',
    },
    {
      image: '/images/work-5.png',
      title: 'Rock, Paper, Scissors',
      description: 'Python CLI game where you battle the computer.',
      link: 'https://github.com/tanshi2003/Rock-Paper-Scisssors',
    },
    {
      image: '/images/work-4.png',
      title: 'Lost & Found Website',
      description: 'Django-based platform to report & search items in campus.',
      link: 'https://github.com/tanshi2003/lost-and-found.git',
    },
    {
      image: '/images/work-7.png',
      title: 'Hotel Management System',
      description: 'Django app for managing bookings, staff & rooms.',
      link: 'https://github.com/tanshi2003/hotel-management-system.git',
    },
    {
      image: '/images/work-8.png',
      title: 'Password Manager',
      description: 'A secure password storage and generator tool.',
      link: 'https://github.com/tanshi2003/Password_Manager.git',
    },
    {
      image: '/images/work-9.png',
      title: 'TeleCRM',
      description: 'Role-based CRM for managing leads, users, campaigns.',
      link: 'https://github.com/tanshi2003/telecrm_db.git',
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
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> <span style={{ marginLeft: '8px' }}>View</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
