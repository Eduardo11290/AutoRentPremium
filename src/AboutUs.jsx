import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

function AboutUs({ onGetStarted }) {
  return (
    <div className="about-us-container">
      {/* Background Layer (Image + Overlay + Shapes) */}
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      
      {/* Main Content Card */}
      <div className="glass-content">
        <h1 className="brand-title">AutoRent <span className="highlight">Premium</span></h1>
        
        <p className="brand-slogan">
          Elegance. Power. Freedom.
        </p>
        
        <p className="brand-description">
          Descoperă flota noastră exclusivistă și transformă fiecare călătorie într-o experiență de neuitat.
          De la limuzine business la mașini sport, suntem gata de drum.
        </p>
        
        <button className="cta-button" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;