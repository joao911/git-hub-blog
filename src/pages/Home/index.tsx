import React from "react";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";

import { Container } from "./styles";
import Posts from "./components/Posts";

const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <SearchInput />
      <Container>
        <Posts />
        <Posts />

        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </Container>
    </>
  );
};

export default Home;
