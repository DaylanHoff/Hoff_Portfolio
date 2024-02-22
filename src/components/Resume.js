import React from 'react';
import '../styles/resume.scss';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="box-container">
        <div className="box">
          <div className="image">
            <a href="https://github.com/DaylanHoff/resume/blob/main/Daylan_Hoff_Resume.pdf">
              <img
                draggable="false"
                src="https://github.com/DaylanHoff/resume/blob/main/resume.png?raw=true"
                alt="Resume"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;