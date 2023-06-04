import React from "react";
import LogoSrc from "../../assets/logo.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={LogoSrc} alt="" />
    </Container>
  );
};

export default Header;
