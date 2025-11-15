import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Fresh Graduate Informatics Engineering", // Peran utama dari LinkedIn
          "Web Development",                    // Keahlian utama
          "Laravel Framework",                  // Framework spesifik
          "IoT Enthusiast",                     // Minat dari LinkedIn
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;