import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Impor gambar proyek Anda yang baru
import monitoringEnergi from "../../Assets/Projects/monitoring.jpeg";
import eLock from "../../Assets/Projects/e-lock.jpeg";
import indomas from "../../Assets/Projects/web-indomas.jpeg";
import deteksiwajah from "../../Assets/Projects/deteksiwajah.jpeg";
import penyiramanotomatis from "../../Assets/Projects/penyiramanotomatis.jpeg";
import pygame from "../../Assets/Projects/pygame.jpeg";

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
          
          {/* Proyek 3: Indomas */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indomas}
              isBlog={false}
              title="USER INTERFACE DAN USER EXPERIENCE PADA WEBSITE"
              description="PERANCANGAN USER INTERFACE DAN USER EXPERIENCE PADA WEBSITE INFORMASI DATA ORGANISASI KEMASYARAKATAN (INDOMAS) BADAN KESATADANUAN BANGSA DAN POLITIK KOTA BATU."
              // ghLink="GANTI_DENGAN_LINK_GITHUB_ANDA_JIKA_ADA"
              // Tidak ada demo link di CV, jadi tombol Demo tidak akan muncul
            />
          </Col>
          
          {/* Proyek 4: Indomas */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deteksiwajah}
              isBlog={false}
              title="Deteksi Ekspresi Wajah Secara Real-Time"
              description="Sistem Pengolahan Citra Digital Untuk Mendeteksi Ekspresi Wajah Secara Real-Time Menggunakan Deep LearningYOLOv5."
              // ghLink="GANTI_DENGAN_LINK_GITHUB_ANDA_JIKA_ADA"
              // Tidak ada demo link di CV, jadi tombol Demo tidak akan muncul
            />
          </Col>
          
          {/* Proyek 5  : Penyiraman Otomatis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penyiramanotomatis}
              isBlog={false}
              title="USER INTERFACE DAN USER EXPERIENCE PADA WEBSITE"
              description="PENGEMBANGAN SISTEM PENYIRAMAN OTOMATIS TANAMAN ANGGREK BERDASARKAN SUHU UDARA DAN KELEMBAPAN TANAH BERBASIS IOT MENGGUNAKAN METODE DECISION TREE."
              // ghLink="GANTI_DENGAN_LINK_GITHUB_ANDA_JIKA_ADA"
              // Tidak ada demo link di CV, jadi tombol Demo tidak akan muncul
            />
          </Col>
          
          {/* Proyek 6  : Indomas */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pygame}
              isBlog={false}
              title="Game 2D Dasar dengan Python"
              description="Sebuah game 2D sederhana yang saya kembangkan menggunakan Python dan Pygame. Dalam game ini, pemain dapat bergerak, melompat, menghindari musuh, dan mengumpulkan koin hingga mencapai pintu akhir untuk menyelesaikan level. Proyek ini saya buat untuk mempelajari dasar-dasar pengembangan game seperti physics, collision detection, rendering, dan UI."
              // ghLink="GANTI_DENGAN_LINK_GITHUB_ANDA_JIKA_ADA"
              // Tidak ada demo link di CV, jadi tombol Demo tidak akan muncul
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;