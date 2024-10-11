import React from "react";
import LoginForm from "../components/login/LoginForm";
import * as L from "../../src/styles/LoginStyle";

const LoginPage = () => {
  return (
    <>
      <L.LoginPageStyle />
      <L.Container>
        <L.FormContainer>
          <L.Title>로그인</L.Title>
          <LoginForm />
        </L.FormContainer>
      </L.Container>
    </>
  );
};

export default LoginPage;
