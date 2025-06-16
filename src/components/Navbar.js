import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="max-width">
                <div className="logo">
                    <Link to="/"><span>Portfolio</span></Link>
                </div>
                <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
                    <li><Link to="/#" smooth onClick={() => setMenuActive(false)} className="menu-btn">Home</Link></li>
                    <li><Link to="/#about" smooth onClick={() => setMenuActive(false)} className="menu-btn">About</Link></li>
                    <li><Link to="/#services" smooth onClick={() => setMenuActive(false)} className="menu-btn">Services</Link></li>
                    <li><Link to="/#skills" smooth onClick={() => setMenuActive(false)} className="menu-btn">Skills</Link></li>
                    <li><Link to="/#projects" smooth onClick={() => setMenuActive(false)} className="menu-btn">Projects</Link></li>
                    <li><Link to="/#contact" smooth onClick={() => setMenuActive(false)} className="menu-btn">Contact</Link></li>
                </ul>
                <div className="menu-btn" onClick={() => setMenuActive(!isMenuActive)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
