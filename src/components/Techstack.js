import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiLinux,
  DiWindows,
  DiApple,
  DiGithub,
  DiRuby,
  DiGroovy,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiVmware,
  SiProxmox,
  SiCsharp,
  SiCplusplus,
  SiJava,
  SiPowershell,
  SiRabbitmq,
  SiMysql,
  SiMicrosoftsqlserver,
  SiDocker,
  SiOpenvpn,
  SiAzuredevops,
  SiAzureartifacts,
  SiCloudbees,
  SiAdobe,
  SiAdobecreativecloud,
} from "react-icons/si";

import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiRuby />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiGroovy />
      </Col>

      
      <Col xs={6} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiReact />
      </Col>


      <Col xs={6} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiRabbitmq />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      
      <Col xs={6} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>


      <Col xs={6} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiAzureartifacts />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiCloudbees />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiOpenvpn />
      </Col>
      

      <Col xs={6} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiApple />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <DiLinux />
      </Col>

      <Col xs={6} md={2} className="tech-icons">
        <SiVmware />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiProxmox />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiDocker />
      </Col>


      
      <Col xs={6} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
    </Row>
  );
}

export default Techstack;
