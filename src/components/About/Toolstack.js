import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg"; // Umum untuk development
// Anda bisa menambahkan ikon untuk tools design jika menggunakannya, contoh:
import { SiBlender, SiAdobephotoshop, SiAdobexd } from "react-icons/si"; // Contoh ikon design tools

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Hanya pertahankan yang paling relevan atau umum */}
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      {/* Tambahkan tools design yang Anda gunakan */}
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender fontSize={"24px"} />
        <div className="tech-icons-text">Blender</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop fontSize={"24px"} />
        <div className="tech-icons-text">Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd fontSize={"24px"} />
        <div className="tech-icons-text">Adobe XD</div>
      </Col>
      {/* Anda bisa menambahkan tools lain seperti XAMPP/WAMP untuk PHP/MySQL development */}
      {/* atau browser testing tools */}
    </Row>
  );
}

export default Toolstack;