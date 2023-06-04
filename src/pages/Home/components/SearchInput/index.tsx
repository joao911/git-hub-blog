import React from "react";

import { Container } from "./styles";

const SearchInput: React.FC = () => {
  return (
    <Container>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </Container>
  );
};

export default SearchInput;
