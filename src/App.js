import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

// Logo will be added later

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cursor">
          {Array(20).fill(null).map((_, index) => (
            <div className="circle" key={index}></div>
          ))}
        </div>
        <div className="scroll-up-btn">
          <i className="fas fa-angle-up"></i>
        </div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
