import React from 'react';
import '../styles/AboutUs.css'; // Optional CSS file for styling
import MedcoLogo from '../assets/logo.png';
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
          MedCo is developed by a passionate team of developers and designers dedicated to making health management simple and accessible.
        </p>
        <div className="team-members">
          <div className="team-member">
            <h3>Rashmika Nattam</h3>
          </div>
          <div className="team-member">
            <h3>Gunashree Channakeshava</h3>
          </div>
          <div className="team-member">
            <h3>Rohan Karle Sudarshan</h3>
          </div>
          <div className="team-member">
            <h3>Sanjana Uppalike</h3>
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
