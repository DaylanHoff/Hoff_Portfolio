import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Daylan_Hoff_Resume.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Work Experience</h3>
            <Resumecontent
              title="Full Stack Developer W/ Net Byte Software"
              date="June 2019 - March 2020"
              content={[
                " Worked with customers to help them install, setup, and repair any issues that would create conflicts with the proprietary software.",
                " Required extensive knowladege of the Windows XP to Windows 10 operating systems and it's drivers in order to resolve customer issues.",
              ]}
            />

            <h3 className="resume-title">Other Experience</h3>
            <Resumecontent
              title="DAHTOOLS - Personal Project"
              content={[
                "This project was developed from the ground up a website, software, and server for this project using industry practices and technologies. Built in Late 2019 to Early 2020.",
              ]}
            />
            <Resumecontent
              title="Capstone - School Project"
              content={[
                "Succeded in passing capstone wich is a 10 weeklong process where students utilize all that they have learned to create a industry ready product using an Agile SCRUM methodology. At the end of the 10 weeks, we were evaluated and cretiqued on our quality of work.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Highschool Graduate - Pioneer Valley Regional High School"
              date="2017 - 2018"
              content={["Took several AP / Honors classes maintaing a 3.5/4 GPA",
                      "I attended 3 hischools total but graduated in Northfield Massachusets."]
                    }
            />
            <Resumecontent
              title="Neumont College of Computer Science"
              date="2018 - 2021"
              content={[" Achieved a batchlors degree in computer science.",
                        " Enrrolled in a 3-year accelerated program. Maintaining a CGPA of 3.0"]}
            />
            <h3 className="resume-title">Certifications</h3>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
