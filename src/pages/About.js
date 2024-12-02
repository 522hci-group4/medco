import React from 'react';
import '../styles/AboutUs.css'; // Optional CSS file for styling
import MedcoLogo from '../assets/logo.png';
import rn from '../assets/rn.png';
import g from '../assets/g.png';
import s from '../assets/s.png';
import r from '../assets/r.png';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <img src={MedcoLogo} style={{height: "100px"}}/>
        <h1>About MedCo</h1>
        <p>Your partner in managing chronic conditions with ease and confidence.</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At MedCo, we aim to empower individuals with chronic conditions by providing intuitive tools to understand their health, track progress, and make informed lifestyle choices.
        </p>
      </section>

      <section className="problem-statement-section">
        <h2>The Challenge</h2>
        <p>
          Managing chronic illnesses can be overwhelming. Deciphering medical reports, understanding health trends, and keeping track of progress often feels like a daunting task. MedCo bridges the gap between complex medical data and actionable insights.
        </p>
      </section>

      <section className="features-section">
        <h2>How We Help</h2>
        <ul>
          <li>Upload and analyze your medical reports in one place.</li>
          <li>Easily look up and understand complex medical terms.</li>
          <li>Track your health trends with visual insights.</li>
          <li>Receive personalized diet and workout suggestions tailored to your health.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <p>
            MedCo is brought to life by a dedicated team of developers, designers, and healthcare professionals who share a passion for simplifying chronic disease management.
        </p>
        <div className="team-members">
            <div className="team-member">
                <img src= {rn} alt="Rashmika Nattam" className="team-photo" style={{height: "100px"}}/>
                <h3>Rashmika<br/> Nattam</h3>
                <div className="social-links">
                    <a href="https://github.com/RashmikaN" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                </div>
            <div className="team-member">
                <img src= {g} alt="Gunashree Channakeshava" className="team-photo" style={{height: "100px"}}/>
                <h3>Gunashree Channakeshava</h3>
                <div className="social-links">
                    <a href="https://github.com/GunashreeC" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <div className="team-member">
                <img src= {r} alt="Rohan Karle Sudarshan" className="team-photo" style={{height: "100px"}}/>
                <h3>Rohan Karle Sudarshan</h3>
                <div className="social-links">
                    <a href="https://github.com/rohansudarshan1810" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <div className="team-member">
                <img src= {s} alt="Sanjana Uppalike" className="team-photo" style={{height: "100px"}}/>
                <h3>Sanjana <br/> Uppalike</h3>
                <div className="social-links">
                    <a href="https://github.com/sanjanauppalike" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
        </section>


      <footer className="about-us-footer">
        <p>
          Join us on our mission to make health management easier for everyone.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
