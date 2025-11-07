import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaGitAlt, FaPython, FaDatabase, FaCloudUploadAlt,
  FaRobot, FaBrain
} from "react-icons/fa";
import {
  SiDjango, SiVercel, SiNetlify, SiRailway, SiXampp,
  SiDbeaver, SiGithub, SiVscodium, SiNextdotjs,
  SiScikitlearn, SiStreamlit, SiPlotly
} from "react-icons/si";

const categories = [
  {
    name: "AI & ML",
    key: "aiml",
    techs: [
      { name: "NLP – spaCy, NLTK", icon: <FaBrain /> },
      { name: "Machine Learning", icon: <SiScikitlearn /> },
      { name: "Generative AI", icon: <FaRobot /> },
      { name: "AI Apps", icon: <SiStreamlit /> },
      { name: "Data Visualization", icon: <SiPlotly /> },
    ],
  },
  {
    name: "Frontend",
    key: "frontend",
    techs: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    name: "Backend",
    key: "backend",
    techs: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MySQL", icon: <FaDatabase /> },
    ],
  },
  {
    name: "Tools & IDEs",
    key: "tools",
    techs: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <SiVscodium /> },
      { name: "PyCharm", icon: <FaPython /> },
      { name: "XAMPP", icon: <SiXampp /> },
      { name: "DBeaver", icon: <SiDbeaver /> },
    ],
  },
  {
    name: "Hosting & Deployment",
    key: "hosting",
    techs: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <FaCloudUploadAlt /> },
      { name: "Railway", icon: <SiRailway /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills" id="skills">
      <div className="work-experience-section">
        <h1 className="title">My Skills</h1>
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="work-exp-title">Professional Experience</h2>
            <div className="work-exp-card">
              <div className="work-exp-header">
                <h3 className="role-title">
                  <i className="fas fa-briefcase"></i> Full Stack Developer Intern
                </h3>
                <p className="company-name">Pedestal Techno World Pvt. Ltd.</p>
                <p className="duration">Jan 2025 – Jun 2025</p>
              </div>
              <ul className="exp-description">
                <li>
                  Collaborated on real-world web applications using <strong>Node.js</strong> and <strong>React.js</strong>, contributing to both frontend and backend modules.
                </li>
                <li>
                  Gained hands-on experience in full product cycles: requirement analysis, development, testing, deployment, and bug fixes.
                </li>
                <li>
                  Worked with Git, APIs, and cloud deployment tools like <strong>Render</strong> and <strong>Netlify</strong> to deliver production-ready features.
                </li>
                <li>
                  Developed strong problem-solving, communication, and team collaboration skills by working closely with senior developers and clients.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Tech Stack Section */}
      <div className="techstack-section">
        <div className="techstack-heading">
          <h2>Tech Stack</h2>
        </div>
        <div className="techstack-tabs">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              className={`techstack-tab${activeTab === idx ? " active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="techstack-grid">
          {categories[activeTab].techs.map((tech) => (
            <div
              key={tech.name}
              className={`techstack-card ${categories[activeTab].key}`}
            >
              <div className="techstack-icon">{tech.icon}</div>
              <div className="techstack-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
