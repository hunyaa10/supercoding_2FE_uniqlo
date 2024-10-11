import styled from "styled-components";

// 스타일 정의 및 export
export const Header = styled.header`
  height: 10vh;
  padding: 0 3rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Logo = styled.h1``;

export const Img = styled.img``;

export const IconBox = styled.div`
  display: flex;
  gap: 1rem; /* 아이콘 간격 추가 */
`;

export const Icon = styled.img`
  width: 32px;
  cursor: pointer; /* 마우스 커서를 손가락 모양으로 변경 */
`;
