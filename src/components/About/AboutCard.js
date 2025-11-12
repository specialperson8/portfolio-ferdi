import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo semua! Saya <span className="purple">Moh. Ferdi Andriansyah</span>{" "}
            dari <span className="purple">Banyuwangi, Jawa Timur, Indonesia</span>.
            <br />
            Saat ini saya adalah <span className="purple">Mahasiswa Politeknik Negeri Jember</span>.
            <br />
            Saya sedang menempuh pendidikan di <span className="purple">Program Studi Teknik Informatika</span> dari <span className="purple">Politeknik Negeri Jember</span>.
            <br />
            <br />
            Di luar kegiatan perkuliahan dan coding, saya suka terlibat dalam aktivitas yang membuat saya kreatif dan terinspirasi:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Belajar hal baru dan mengikuti perkembangan teknologi
            </li>
            <li className="about-activity">
              <ImPointRight /> Kolaborasi dalam Tim
            </li>
            <li className="about-activity">
              <ImPointRight /> Mengeksplorasi ide-ide desain
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Senang belajar hal baru dan suka bekerja sama dalam tim serta memiliki aspirasi untuk bekerja dalam bidang IT."{" "}
          </p>
          <footer className="blockquote-footer">Moh. Ferdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;