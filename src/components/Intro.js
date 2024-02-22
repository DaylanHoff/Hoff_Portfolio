import React from 'react';
import { Tilt } from 'react-tilt'; // Import the Tilt component
import '../styles/intro.scss';
import Button from '../components/Button';
import hero from '../assets/images/hero.png';

const Intro = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me-section');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="intro">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <div className="hero">
        <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="Tilt-inner">
            <img draggable="false" src={hero} alt="" />
          </div>
        </Tilt>
        <div className="intro-container">
          <h1 className="intro-text">
            <div className="top">Hi, my name is <span className="text-color-main">Daylan Hoff</span></div>
            <div className="bottom">Technology Leader and Entrepreneur</div>
          </h1>

          <div class="socials">
            <ul class="social-icons">
              <li><a class="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/DaylanHoff/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
              <li><a class="github" aria-label="GitHub" href="https://github.com/DaylanHoff" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
              <li><a class="twitter" aria-label="Twitter" href="https://twitter.com/Daylan_Hoff" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
              <li><a class="youtube" aria-label="Youtube" href="https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg"target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a></li>
            </ul>
          </div>
          <div className="scroll-button">
          <Button onClick={scrollToAboutMe} label="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;