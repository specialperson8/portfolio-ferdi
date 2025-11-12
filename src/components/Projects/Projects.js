import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Impor gambar proyek Anda yang baru
import monitoringEnergi from "../../Assets/Projects/monitoring.jpeg";
import eLock from "../../Assets/Projects/e-lock.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut adalah beberapa proyek yang pernah saya kerjakan.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Proyek 1: Monitoring Energi */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitoringEnergi}
              isBlog={false}
              title="Monitoring Energi"
              description="Proyek IoT dan website untuk optimasi konsumsi energi pada budidaya buah naga, menggunakan metode Analytic Hierarchy Process (AHP) dan K-Means Clustering untuk analisis data."
              // ghLink="GANTI_DENGAN_LINK_GITHUB_ANDA_JIKA_ADA"
              // demoLink="http://web-monitoring.org/" // Pastikan link ini benar dan bisa diakses
            />
          </Col>

          {/* Proyek 2: E-Lock */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eLock}
              isBlog={false}
              title="E-Lock"
              description="Sistem keamanan pintu rumah berbasis ESP32 dan server IoT. Terintegrasi dengan aplikasi mobile Android dan website, dilengkapi fitur keamanan seperti pengenalan wajah dan sidik jari."
              // ghLink="GANTI_DENGAN_LINK_GITHUB_ANDA_JIKA_ADA"
              // Tidak ada demo link di CV, jadi tombol Demo tidak akan muncul
            />
          </Col>

          {/* Anda bisa menambahkan lebih banyak proyek di sini dengan format yang sama */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;