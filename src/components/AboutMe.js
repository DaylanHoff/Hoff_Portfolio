import React from 'react';
import '../styles/aboutMe.scss';
import profileImage from '../assets/profile-image.jpg';

const AboutMe = () => {
  return (
    <section id="about-me-section" className="about-me-section">
      <div className="content">
        <div className="about-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h2 className="AboutTitle">
            <div className="text-content">ABOUT ME<p className="AboutBlurb">
              <br/>
              Family man passionate about technology. Working in the industry for over 5 years starting in graphics and working customer support. Now having grown in the industry managing a team as a DevOps Engineer striving to make the world a better place.
            </p></div>
            <div className="center">
              <a href="https://github.com/DaylanHoff/resume/blob/main/Daylan_Hoff_Resume.pdf" target="_blank" class="button" rel="noopener noreferrer">View Resume</a>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;