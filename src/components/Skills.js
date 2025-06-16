import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ skill, index, inView }) => {
  const levelClass = skill.level >= 85 ? 'level-advanced' : 
                    skill.level >= 60 ? 'level-intermediate' : 'level-beginner';
  const levelText = skill.level >= 85 ? 'Advanced' : 
                   skill.level >= 60 ? 'Intermediate' : 'Beginner';
                   
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-chip"
    >
      {skill.name}
      <span className={levelClass}>{levelText}</span>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const frontendSkills = [
    { name: 'HTML  ', level: 90 },
    { name: 'CSS  ', level: 90 },
    { name: 'JavaScript  ', level: 90 },
    { name: 'React  ', level: 40 }
  ];

  const backendSkills = [
    { name: 'Node.js  ', level: 55 },
    { name: 'Express.js  ', level: 55 },
    { name: 'Django  ', level: 60 },
    { name: 'MySQL  ', level: 90 }
  ];

  const programmingSkills = [
    { name: 'C  ', level: 95 },
    { name: 'C++  ', level: 95 },
    { name: 'Python  ', level: 85 }
  ];

  const toolsSkills = [
    { name: 'Git  ', level: 85 },
    { name: 'PyCharm  ', level: 85 },
    { name: 'Postman  ', level: 95 },
    { name: 'VS Code  ', level: 90 }
  ];
  return (
    <section className="skills" id="skills">
      <div className="work-experience-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >            <h2 className="work-exp-title">Work Experience</h2>
            <div className="work-exp-card">
              <h3 className="role-title">
                <i className="fas fa-briefcase"></i>
                Full Stack Developer Intern
              </h3>
              <p className="company-name">Pedestal Techno World Pvt. Ltd.</p>
              <p className="duration">January 2025 - June 2025</p>
              <p className="exp-description">
                Completed a 5-month full-stack development internship, contributing to both frontend and backend development.
                –Worked on live projects, handled technical and operational tasks, and gained end-to-end exposure to real-world software
                development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="tech-stack-section">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >            
          <h2 className="tech-stack-title">Tech Stack</h2>
            
            <div className="tech-stack-grid">
              <div className="stack-category">
                <h2>Backend Development</h2>
                <div className="skills-grid">
                  {backendSkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>

              <div className="stack-category">
                <h2>Frontend Development</h2>
                <div className="skills-grid">
                  {frontendSkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index + backendSkills.length}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>

              <div className="stack-category">
                <h2>Programming Languages</h2>
                <div className="skills-grid">
                  {programmingSkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index + backendSkills.length + frontendSkills.length}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>

              <div className="stack-category">
                <h2>Tools & Technologies</h2>
                <div className="skills-grid">
                  {toolsSkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index + backendSkills.length + frontendSkills.length + programmingSkills.length}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
