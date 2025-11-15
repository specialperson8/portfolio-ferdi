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
            Saya merupakan Fresh Graduate <span className="purple">Program Studi Teknik Informatika – Politeknik Negeri Jember.</span>.

            <br />
            <br />
            Saya memiliki ketertarikan kuat pada dunia teknologi, terutama di bidang:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development (khususnya Laravel)
            </li>
            <li className="about-activity">
              <ImPointRight /> IoT & Sensor Monitoring
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX & Desain Digital
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Selama masa studi, saya terbiasa bekerja dalam tim,
            memecahkan masalah secara kreatif,dan mengembangkan berbagai proyek mandiri maupun kolaborasi. Saya juga senang mempelajari hal-hal baru untuk meningkatkan kemampuan teknis dan kreativitas saya.

            <br />
            <br />
          Di luar coding, saya menikmati aktivitas yang mendorong saya untuk terus berkembang, seperti:
          </p>

           <ul>
            <li className="about-activity">
              <ImPointRight /> Mengeksplorasi ide-ide desain
            </li>
            <li className="about-activity">
              <ImPointRight /> Berkolaborasi dengan teman satu tim
            </li>
            <li className="about-activity">
              <ImPointRight /> Mengikuti perkembangan teknologi terbaru
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
           Sebagai seorang fresh graduate, saya siap untuk belajar, bertumbuh, dan memberikan kontribusi terbaik dalam dunia profesional.
          </p>
          <footer className="blockquote-footer">Moh. Ferdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;