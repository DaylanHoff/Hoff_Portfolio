import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "../Techstack";
import dahtools from "../../Assets/Projects/DAHTOOLS.PNG";
import enigma from "../../Assets/Projects/Enigma.jpg";
import math from "../../Assets/Projects/MathCalc.png";
import github from "../../Assets/Projects/Octocat.png";

function Projects() {
  return (
<Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dahtools}
              isBlog={false}
              title="DAHTOOLS"
              description="DAHTOOLS is a freemium software to keep accounts secure and easily accessible. Future development will lead to this service becomeing a multi-tool for convient consumer needs. This project is based off my first ever programming project Password WaT that can still be found on my github."
              link="https://dahtools.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enigma}
              isBlog={false}
              title="Enigma Machine"
              description="The inigma machine was a encryption divice used by Nazi Germany in World War 2, and was thought to be imposible to crack. However, a man named Alan Turing decrypted it, and saved the lives of countless soldiers. This project was writen in Microsoft SQL recreating the enigma machine."
              link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math}
              isBlog={false}
              title="Linear Algabra Calculator"
              description="This project was made durring my linear algabra class at Neumont College and can handle several 2d and 3d mathmatical funtions such as. Finding the Inverse, determiniate, and useing cramer's rule to solve matrices."
              link="https://github.com/"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="about-section">
        <h1 className="project-heading">
            List of My Professional <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack/>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
