import React from 'react';
import {
    FaDownload,
    FaBriefcase,
    FaBuilding,
    FaCalendarAlt,
    FaBolt,
    FaUsers,
    FaChartLine,
} from 'react-icons/fa';

const highlights = [
    { icon: <FaBolt />, label: 'Quick to learn' },
    { icon: <FaUsers />, label: 'Team contributor' },
    { icon: <FaChartLine />, label: 'Growth focused' },
];

const experiences = [
    {
        role: 'Graduate Engineer',
        company: 'QualityAI (formerly Qualitest)',
        client: 'Client: Google',
        duration: 'Feb 2026 – Present',
        points: [
            'Developed internal web applications and automation solutions for Google using Google Apps Script, JavaScript, HTML, CSS, and Google Sheets.',
            'Built a real-time project monitoring and status tracking dashboard to automate project reporting across initiatives.',
            'Integrated Google Sheets as a backend data source with dynamic JavaScript-based rendering for live project health, ownership, priority, and workflow tracking.',
            'Supported LLM evaluation and data validation workflows while improving reporting consistency and operational efficiency.',
        ],
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Pedestal Techno World Pvt. Ltd.',
        duration: 'Jan 2025 – Jun 2025',
        points: [
            'Collaborated on real-world web applications using Node.js and React.js, contributing to both frontend and backend modules.',
            'Gained hands-on experience across the full product lifecycle, including requirement analysis, development, testing, deployment, and bug fixes.',
            'Worked with Git, APIs, and cloud deployment platforms including Render and Netlify to deliver production-ready features.',
            'Developed strong problem-solving, communication, and collaboration skills by working closely with senior developers and clients.',
        ],
    },
];

const About = () => {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>

                <div className="about-grid">
                    <div className="about-summary">
                        <h3 className="about-summary-heading">Summary</h3>
                        <p>
                            Software Engineer specializing in AI-driven systems, web development, and workflow automation. Experienced in building scalable applications, developing automation using Google Apps Script, and supporting Large Language Model (LLM) evaluation while working on Google projects at QualityAI.
                             </p>
                        <div className="about-pills">
                            {highlights.map((item) => (
                                <span className="about-pill" key={item.label}>
                                    {item.icon}
                                    {item.label}
                                </span>
                            ))}
                        </div>
                        <a href="/resume.pdf" className="about-cv-btn">
                            <FaDownload />
                            Download CV
                        </a>
                    </div>

                    <div className="about-experience">
                        <h3 className="about-exp-heading">Professional Experience</h3>
                        <div className="exp-list">
                            {experiences.map((exp) => (
                                <article className="exp-card" key={`${exp.role}-${exp.company}`}>
                                    <div className="exp-card-top">
                                        <div className="exp-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="exp-heading-text">
                                            <h4 className="exp-role">{exp.role}</h4>
                                            <p className="exp-company">
                                                <FaBuilding />
                                                {exp.company}
                                                {exp.client ? ` · ${exp.client}` : ''}
                                            </p>
                                        </div>
                                        <span className="exp-duration">
                                            <FaCalendarAlt />
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <ul className="exp-points">
                                        {exp.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;