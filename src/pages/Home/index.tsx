import React, { useCallback, useEffect, useState } from "react";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";
import { map, size } from "lodash";
import { Container } from "./styles";
import Posts from "./components/Posts";
import { api } from "../../api";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const username = "joao911";
  const repoName = "git-hub-blog";

  const getPosts = useCallback(
    async (query = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}repo:${username}/${repoName}`
        );
        console.log(response.data.items);
        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={size(posts)} getPosts={getPosts} />
      <Container>
        {map(posts, (item) => (
          <Posts key={item.number} item={item} />
        ))}
      </Container>
    </>
  );
};

export default Home;
