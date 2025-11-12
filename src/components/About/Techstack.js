import React from "react";
import { Col, Row } from "react-bootstrap";
// Mengimpor ikon dari library react-icons
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiPhp,
  DiMysql,
  DiLaravel
} from "react-icons/di";
import { SiBlender, SiAdobexd } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Keahlian Utama */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
        <div className="tech-icons-text">Laravel</div>
      </Col>

      {/* Keahlian Lainnya */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <div className="tech-icons-text">IoT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <div className="tech-icons-text">3D Design</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
        <div className="tech-icons-text">UI/UX Design</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;