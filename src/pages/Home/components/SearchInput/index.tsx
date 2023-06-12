import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { Container } from "./styles";

interface SearchInputProps {
  postsLength: number;
  getPosts: (query?: string) => Promise<void>;
}

const SearchInput: React.FC<SearchInputProps> = ({ postsLength, getPosts }) => {
  const schema = yup.object({
    query: yup.string(),
  });

  type FormData = yup.InferType<typeof schema>;

  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("data: ", data);
    getPosts(data.query);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </Container>
  );
};

export default SearchInput;
