import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  height: 10.25rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["base-post"]};
  border: 1px solid ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors["base-label"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
