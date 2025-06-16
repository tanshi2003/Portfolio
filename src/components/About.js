import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const About = () => {
    const typedRef = useRef(null);
    
        useEffect(() => {
            const typed = new Typed(typedRef.current, {
                strings: ["Software Engineer", "Web Developer", "Web Designer", "Digital Creator"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
    
            return () => {
                typed.destroy();
            };
        }, []);

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src="/images/img.jpg" alt="Profile" />
                    </div>
                    <div className="column right">
                        <div className="text">I'm Tanshi and I'm a <span className="typing" ref={typedRef}></span></div>
                        <p>
                            I am seeking an entry-level opportunity with a prestigious organization where I can leverage my skills and continue to expand my knowledge in the field. I am confident in my ability to quickly master new technologies and contribute effectively to team projects. My goal is to grow professionally while providing valuable contributions to the organization.
                        </p>
                        <a href="/resume.pdf">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
