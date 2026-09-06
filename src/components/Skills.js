import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaCloudUploadAlt,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaGlobe,
  FaCode,
  FaCodeBranch,
  FaServer,
  FaNetworkWired,
} from 'react-icons/fa';

import {
  SiDjango,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiXampp,
  SiDbeaver,
  SiGithub,
  SiVscodium,
  SiNextdotjs,
  SiScikitlearn,
  SiCplusplus,
} from 'react-icons/si';

const categories = [
  {
    name: 'Languages',
    techs: [
      { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    ],
  },
  {
    name: 'Web & Frameworks',
    techs: [
      { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#111827' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    ],
  },
  {
    name: 'Data, AI & Visualization',
    techs: [
      { name: 'Power BI', icon: <FaChartLine />, color: '#F2C811' },
      { name: 'NLP-based Analysis', icon: <FaBrain />, color: '#8B5CF6' },
      { name: 'Data Validation', icon: <FaDatabase />, color: '#4479A1' },
      { name: 'Basic ML Applications', icon: <SiScikitlearn />, color: '#F7931E' },
    ],
  },
  {
    name: 'Tools, Databases & CS',
    techs: [
      { name: 'Google Apps Script', icon: <FaRobot />, color: '#34A853' },
      { name: 'Google Sites', icon: <FaGlobe />, color: '#4285F4' },
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#24292F' },
      { name: 'VS Code', icon: <SiVscodium />, color: '#007ACC' },
      { name: 'PyCharm', icon: <FaPython />, color: '#21D789' },
      { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
      { name: 'SQLite', icon: <FaDatabase />, color: '#003B57' },
      { name: 'DSA', icon: <FaCode />, color: '#2563EB' },
      { name: 'OOP', icon: <FaCodeBranch />, color: '#7C3AED' },
      { name: 'DBMS', icon: <FaDatabase />, color: '#0EA5E9' },
      { name: 'OS', icon: <FaServer />, color: '#10B981' },
      { name: 'Computer Networks', icon: <FaNetworkWired />, color: '#F59E0B' },
    ],
  },
  {
    name: 'Deployment',
    techs: [
      { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
      { name: 'Render', icon: <FaCloudUploadAlt />, color: '#46E3B7' },
      { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
      { name: 'Railway', icon: <SiRailway />, color: '#8B5CF6' },
      { name: 'XAMPP', icon: <SiXampp />, color: '#FB7A24' },
      { name: 'DBeaver', icon: <SiDbeaver />, color: '#382923' },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];

  return (
    <section className="skills" id="skills">
      <h1 className="title">My Skills</h1>

      <div className="skills-wrapper">
        <div className="techstack-section">
          {/* <h2 className="techstack-heading-title">Tech Stack</h2>
          <p className="techstack-subtitle">
            Tools I use to design, build, and ship products.
          </p> */}

          <div className="techstack-tabs">
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                type="button"
                className={`techstack-tab${activeTab === idx ? ' active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.name}
              className="techstack-grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              {activeCategory.techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="techstack-card"
                  style={{ '--tech-color': tech.color }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.28, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <span className="techstack-glow" aria-hidden="true"></span>
                  <div className="techstack-icon">{tech.icon}</div>
                  <div className="techstack-name">{tech.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;