import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["Software Engineer", "Web Developer", "Web Designer", "Digital Creator"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <section
            className="home"
            id="home"
            style={{
                backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/bg1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                position: "relative",
                width: "100vw",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.55)',
                    zIndex: 1,
                }}
            ></div>
            <div className="max-width" style={{ position: 'relative', zIndex: 2 }}>
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
