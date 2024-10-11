import styled from "styled-components";
import { NavLink } from "react-router-dom";

// style
export const Nav = styled.nav`
  width: 20vw;
  height: 100vh;
  padding: 8rem 0 2rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  border-left: 1px solid #ccc;
  background-color: #fff;
`;
export const Ul = styled.ul`
  width: 100%;
`;
export const Li = styled.li`
  width: 100%;
  font-size: 14px;
  border-radius: 50px 0 0 50px;
  &:hover {
    color: #ed1e25;
  }
`;
export const SellerLi = styled(Li)`
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  color: ${({ isActive }) => (isActive ? "inherit" : "#ccc")};
`;

// 이동된 링크 스타일
export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  border-radius: 50px 0 0 50px;
  &.active {
    background-color: #ffdfe0;
    font-weight: 500;
  }
`;

// 버튼
export const SellerBtnBox = styled.div`
  width: fit-content;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
