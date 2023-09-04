import React from 'react';
import '../styles/projects.scss';
import oldportfolio from '../assets/images/projects/OldPortfolio.png';
import portfolio from '../assets/images/projects/portfolio.png';
import art from '../assets/images/projects/art.png';
import dahtools from '../assets/images/projects/DAHTOOLS.png';
import RPSBot from '../assets/images/projects/RPSBot.png';
import StartMeUp from '../assets/images/projects/StartMeUp.png';

const Projects = () => {
  return (
    <section class="projects" id="projects">

    <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

    <div class="box-container">
      <div class="box tilt">
        <img draggable="false" src={RPSBot} alt="" />
        <div class="content">
          <div class="tag">
            <h3>Roleplay Studios Discord Bot</h3>
          </div>
          <div class="desc">
            <p>A bot that does or did a bit of everything in order to improve the user experience!</p>
            <div class="btns">
              <a href="#home" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="https://github.com/DaylanHoff/DiscordBot" class="btn" target="_blank">Code <i
                  class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="box tilt">
        <img draggable="false" src={StartMeUp} alt="" />
        <div class="content">
          <div class="tag">
            <h3>Simply Startup Script</h3>
          </div>
          <div class="desc">
            <p>Great powershell script to quickly install programs on a fresh install of Windows.</p>
            <div class="btns">
              <a href="#home" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="https://github.com/DaylanHoff/StartMeUp" class="btn" target="_blank">Code <i
                  class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-container">
      <div class="box tilt">
        <img draggable="false" src={art} alt="" />
        <div class="content">
          <div class="tag">
            <h3>Artwork</h3>
          </div>
          <div class="desc">
            <p>I do truly love graphics and graphics design! Here is where I store my public creations.</p>
            <div class="btns">
              <a href="#home" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="https://github.com/DaylanHoff/DiscordBot" class="btn" target="_blank">Code <i
                  class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="box tilt">
        <img draggable="false" src={dahtools} alt="" />
        <div class="content">
          <div class="tag">
            <h3>DAHTOOLS</h3>
          </div>
          <div class="desc">
            <p>Capstone project for college where I learned a lot about .NET and encryption.</p>
            <div class="btns">
              <a href="#home" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="https://github.com/DaylanHoff/DAHTOOLS" class="btn" target="_blank">Code <i
                  class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="box tilt">
        <img draggable="false" src={oldportfolio} alt="" />
        <div class="content">
          <div class="tag">
            <h3>Old Portfolio Website</h3>
          </div>
          <div class="desc">
            <p>Old portfolio website I made using React. Most of the project is deprecated now, but it's a great template! (artwork by Carbot)</p>
            <div class="btns">
              <a href="#home" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="https://github.com/DaylanHoff/Hoff_Prortfolio_OLD" class="btn" target="_blank">Code <i
                  class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  );
};

export default Projects;