import React, { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";

import { Container } from "./styles";
import { IPost } from "../..";
import { ptBR } from "date-fns/locale";

interface IPostProps {
  item: IPost;
}
const Posts: React.FC<IPostProps> = ({ item }) => {
  const distanceToNow = useMemo(() => {
    return formatDistanceToNow(new Date(item.created_at), {
      addSuffix: true,
      locale: ptBR,
    });
  }, [item.created_at]);

  return (
    <Container to="/post/1">
      <div>
        <strong>{item.title}</strong>
      </div>
      <p>{distanceToNow}</p>
    </Container>
  );
};

export default Posts;
