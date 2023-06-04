import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 13.5rem;
  margin-top: -5.5rem;
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      line-height: 130%;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        height: 1.25rem;
        width: 1.25rem;
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }
  }
`;
