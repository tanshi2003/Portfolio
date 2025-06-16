import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
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
        <section className="home" id="home">
            <div className="bg-image"></div>
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Tanshi Khandelwal</div>
                    <div className="text-3">And I'm a <span className="typing" ref={typedRef}></span></div>
                    <a href="mailto:info@example.com">Hire me</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
