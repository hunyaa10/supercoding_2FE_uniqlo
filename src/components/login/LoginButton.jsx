import React from "react";
import * as L from "../../styles/LoginStyle";

// 로딩 상태에 따른 버튼 컴포넌트
const LoginButton = ({ isLoading }) => {
  return (
    <L.Button type="submit" disabled={isLoading}>
      {isLoading ? "로그인 중입니다." : "Login"}
    </L.Button>
  );
};

export default LoginButton;
