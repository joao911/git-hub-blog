import React from "react";

import { Container } from "./styles";

const Posts: React.FC = () => {
  return (
    <Container to="/post/1">
      <div>
        <strong>Lorem ipsum dolor sit.</strong>
        <span>há 1 dia</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor iusto
        ullam laudantium quas error ut quae, voluptatem at aliquam!...
      </p>
    </Container>
  );
};

export default Posts;
