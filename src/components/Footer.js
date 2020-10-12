/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-2">
      <Container>
        <p className="pt-2">
          Sitio creado por{" "}
          <a href="https://nestoracerbo.carrd.co/" target="_blank" rel="noopener noreferrer" crossorigin className="text-danger" id="linkpropio">
            Néstor Acerbo
          </a> para el curso de React de Coderhouse
        </p>
        <div className="socialMediaLinks pb-2">
          <a href="https://twitter.com/nlacerbo" className="fab fa-twitter" target="_blank" rel="noopener noreferrer" crossorigin></a>
          <a href="https://www.linkedin.com/in/nestorleonelacerbo/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer" crossorigin></a>
          <a href="https://www.instagram.com/nesacerbo/" className="fab fa-instagram" target="_blank" rel="noopener noreferrer" crossorigin></a>
          <a href="https://github.com/NestorLA" className="fab fa-github" target="_blank" rel="noopener noreferrer" crossorigin></a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
