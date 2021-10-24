import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Techstack from "../Techstack_short";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid className="about-section">
        <h1 className="project-heading">
            Note Worthy <strong className="purple">Skillsets </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack/>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> me
            </h1>
            <p className="home-about-body">
              I am a simple person that grew up in 
              <b className="purple"> Salt Lake City, Utah</b>
              , though durring high school I moved around a good amount.
              I ended up graduating high school at a small town in Massachusetts after moving around a lot in highschool. Eventualy I chose to move back home to Salt Lake City. That's where I achieved a
              <b className="purple"> Computer Science Degree </b> at
              <i>
                <a href="www.neumont.edu"><b className="purple"> Neumont </b></a>
              </i>
              College of Computer Science. This is where I learned and developed a lot of my skills, and practices as a developer. 

            In my free time I enjoy working on other projects and visiting friends. However, latley I have enjoyed working out, and reading a good book. I used to play 
            <b className="purple"> hockey </b> 
            a lot before I started college, but now I am more into 
            <b className="purple"> weightlifting</b>. Otherwise, I will try to spend time with my small family in St. George.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1>Connect With Me</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DaylanHoff"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daylan-hoff-16747013b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
