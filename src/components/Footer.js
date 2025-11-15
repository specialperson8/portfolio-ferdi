import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* PERUBAHAN DI SINI */}
        <Col md="4" className="footer-copywright">
          <h3>Dirancang dan Dikembangkan oleh Moh. Ferdi Andriansyah</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MFA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* Pastikan link-link ini sudah benar */}
            <li className="social-icons">
              <a
                href="https://github.com/Ferdiandrians"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ferdiandrians/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* Tambahkan kembali jika Anda ingin menampilkan Twitter atau Instagram */}
            {/* <li className="social-icons">
              <a
                href="LINK_TWITTER_ANDA"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="LINK_INSTAGRAM_ANDA"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;