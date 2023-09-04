import React from 'react';
import '../styles/aboutMe.scss';
import profileImage from '../assets/profile-image.png';

const AboutMe = () => {
  return (
    <section id="about-me-section" className="about-me-section">
      <div className="content">
        <div className="about-content">
          <div><img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <h2 className="AboutTitle"> <div className="text-content">ABOUT ME<p className="AboutBlurb">
            I am a passionate technology creator and problem solver striving to move the industry to better and greater standards with the support of the people around me! Since a young age, I have always had a strong desire to help build the world to be a better place, and technology has given me the outlet to do just that!
          </p></div></h2>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;