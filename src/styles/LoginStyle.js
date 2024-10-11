import styled, { createGlobalStyle } from "styled-components";

// 로그인 페이지에서만 적용될 body 스타일
export const LoginPageStyle = createGlobalStyle`
  body {
    overflow: hidden;  /* 로그인 페이지에만 스크롤 제거 */
  }
`;

// 전체 컨테이너 스타일
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

// 로그인 폼을 감싸는 컨테이너
export const FormContainer = styled.div`
  width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// 제목 스타일
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
`;

// 입력 필드를 감싸는 스타일
export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

// 에러 메시지 스타일
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`;

// 로그인 버튼 스타일
export const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background-color: ${(props) =>
    props.disabled ? "#ddd" : "#000"}; // 로딩 중이면 회색, 기본은 검정색
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "pointer"}; // 로딩 중이면 커서 변경
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#ddd" : "#333"}; // 호버 시 약간 더 밝은 검정색
  }
`;

// 인풋 필드 스타일
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
  }

  ${(props) =>
    props.error &&
    `
    border-color: red;
    background-color: #ffe6e6;
  `}
`;
