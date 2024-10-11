import styled from "styled-components";

const Msg = styled.span`
  display: block;
  color: #007bff;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const UserMsg = ({ children }) => {
  return <Msg>{children}</Msg>;
};
