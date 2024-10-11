import styled from "styled-components";

const Title = styled.h3`
  height: 8vh;
  border-bottom: 1px solid #ccd3d750;
  text-align: center;
  line-height: 8vh;
  font-size: 1rem;
  background-color: #fff;
`;

export const UserTitle = ({ children }) => {
  return <Title>{children}</Title>;
};
