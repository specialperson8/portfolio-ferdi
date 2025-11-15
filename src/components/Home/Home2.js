import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sembur-avatar.png"; // Pastikan avatar.svg adalah gambar yang relevan atau ganti jika perlu
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Saya <b className="purple">lulusan Politeknik Negeri Jember</b> pada Program Studi Teknik Informatika. Saya <b className="purple">senang belajar hal baru</b> dan suka bekerja sama dalam tim, dengan aspirasi untuk berkarir di bidang IT.
              <br />
              <br />
              Saya memiliki performa akademik dan interpersonal yang baik, serta pengetahuan di berbagai teknologi seperti:
              <i>
                <b className="purple"> JavaScript, HTML, PHP, CSS, Python, IoT, 3D design dan design grafis. </b>
              </i>
              <br />
              <br />
              Bidang minat utama saya meliputi pengembangan
              <i>
                <b className="purple"> Aplikasi Web (Web Applications) </b>
              </i>
              terutama dengan
              <b className="purple"> Laravel Framework </b> dan eksplorasi
              <b className="purple"> Internet of Things (IoT). </b>
              <br />
              <br />
              Saya juga tertarik membangun proyek menggunakan
              <b className="purple"> React.js </b> untuk pengembangan frontend yang modern dan interaktif.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* Bagian untuk menampilkan penghargaan. Anda bisa membuat komponen terpisah jika ingin lebih rapi. */}
        <Row style={{ paddingTop: "50px" }}>
            <Col md={12} className="home-about-social">
              <h2>My <span className="purple">Awards</span></h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <b className="purple">GOLD MEDAL AISEEF</b> (Asean Innovative Science, Environmental & Entrepreneur Fair) 2022
                </li>
              </ul>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;