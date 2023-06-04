import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCableCar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";
import ExternalLink from "../../../../components/ExternalLink";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <header>
        <ExternalLink
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          onClick={goBack}
          variant="iconLeft"
        />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
        {/* <p>oii</p> */}
      </header>
      <h1>Lorem ipsum dolor sit.</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} /> Lorem, ipsum.
        </li>
        <li>
          <FontAwesomeIcon icon={faCableCar} /> Há um dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} /> Comentários
        </li>
      </ul>
    </Container>
  );
};

export default Header;
