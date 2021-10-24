import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Check out my GitHub!"
              description="There are several other projects I have worked on in the past and most of them can be found on github! I do have a tencendy to private a lot of my repositories so if you have any questions feel free to contact me! My information is on my resume, and on the bottom of the website."
              link="https://github.com/"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Suicide Ideation Prediction"
              description="Using 'Natural Launguage Processing' for detection of posts in social media platform to identity if a person is affected by any mental illness and thus helping in sucide prevention."
              link="https://gist.github.com/soumyajit4419/ef44d41fdc510637c7f6730d1bbce2ed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="Emotion Predcition from EEG Signals"
              description="Using EEG signals from 'AMIGOS' Dataset to extract features and train a classifier that helps in detection of human emotions from Brain Signals."
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="Making Healthcare Easy and Hassle Free"
              description="Extract, store and retrieve medical information from Medical Reports using OCR.
              Display the information online Graphically for the use of Patients as well as Doctors only with Authorised Access.
              Giving an complete health Analytics to doctors of Patients as well as Doctors preseving user privacy."
              link="https://github.com/soumyajit4419/MedHub_360"
            />
          </Col> */}
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p> */}
        {/* <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
      <Container fluid className="about-section">
      <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-csharp-line" />
          <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="cib-dot-net" />
          <Techstack iconName="cib-java" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-python-plain-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="cib-mysql" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          Preferred <strong className="purple"> Environments </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-windows8-original" />
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="devicon-apple-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-visual-studio" />

          <Techstack iconName="devicon-github-plain" />

        </Row>
        </Container>
    </Container>
  );
}

export default Projects;
