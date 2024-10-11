import styled from "styled-components";

const ErrorMsg = styled.span`
  display: block;
  color: #ed1e25;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ErrorMessage = ({ children }) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};
