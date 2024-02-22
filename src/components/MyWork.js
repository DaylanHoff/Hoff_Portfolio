import React from 'react';
import '../styles/myWork.scss';
import Button from '../components/Button';
const MyWork = () => {

  return (
  <section class="experience" id="experience">
      <div className="title">
      <h2 class="heading"><i class="fas fa-briefcase"></i> Experience </h2>
      </div>
     <div class="timeline">

      <div class="container right">
        <div class="content">
          <div class="tag">
            <h2>AdvancedMD</h2>
          </div>
          <div class="desc">
            <h3>Release / DevOps Engineer</h3>
            <p>March 2022 - Present</p>
          </div>
        </div>
      </div>

      <div class="container left">
        <div class="content">
          <div class="tag">
            <h2>Caneye</h2>
          </div>
          <div class="desc">
            <h3>Co-Founder</h3>
            <p>February 2022 - Present</p>
          </div>
        </div>
      </div>

      <div class="container right">
        <div class="content">
          <div class="tag">
            <h2>AdvancedMD</h2>
          </div>
          <div class="desc">
            <h3>Quality Assurance Engineer & Engineering Operations | Internship</h3>
            <p>April 2021 - December 2021</p>
          </div>
        </div>
      </div>

      <div class="container left">
        <div class="content">
          <div class="tag">
            <h2>1CompleteSolution</h2>
          </div>
          <div class="desc">
            <h3>Family Business | Full Stack Developer</h3>
            <p>January 2019 - March 2021</p>
          </div>
        </div>
      </div>

      <div class="container right">
        <div class="content">
          <div class="tag">
            <h2>Neumont</h2>
          </div>
          <div class="desc">
            <h3>Bachelors Of Computer Science</h3>
            <p>October 2018 - December 2021</p>
          </div>
        </div>
      </div>

      <div class="container left">
        <div class="content">
          <div class="tag">
            <h2>Support Agent</h2>
          </div>
          <div class="desc">
            <h3>Volunteer Community Support Agent</h3>
            <p>Jan 2016 - September 2018</p>
          </div>
        </div>
      </div>
      <div className="center">
      <a href="https://github.com/DaylanHoff/resume/blob/main/Daylan_Hoff_Resume.pdf" target="_blank" class="button" rel="noopener noreferrer">View Resume</a>
    </div>
    </div>

  </section>
  );
};

export default MyWork;