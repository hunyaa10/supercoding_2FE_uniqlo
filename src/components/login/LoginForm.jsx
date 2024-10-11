import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/api";
import { isValidEmail, isValidPassword } from "../../utils/validations.js";
import * as L from "../../styles/LoginStyle";
import LoginButton from "./LoginButton.jsx";
import { UserContext } from "../../hook/context/UserContext.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // 이메일 입력 핸들러
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!value || !isValidEmail(value));
  };

  // 이메일 유효성 확인
  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
    }
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(
      !isValidPassword(value)
        ? "비밀번호는 영문자와 숫자를 포함하여 8자 이상 20자 이하로 입력해야 합니다."
        : ""
    );
  };

  const handlePasswordBlur = () => {
    if (!isValidPassword(password)) {
      setPasswordError(
        "비밀번호는 영문자와 숫자를 포함하여 8자 이상 20자 이하로 입력해야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  // 로그인 요청 함수
  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    if (emailError || passwordError) {
      setError("이메일이나 비밀번호를 확인해 주세요.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await login(email, password, setUser);
      console.log("로그인 응답:", response);

      // 로그인 성공 후 로컬 스토리지에 토큰 저장
      const accessToken = response.headers["authorization"].split(" ")[1];
      localStorage.setItem("accessToken", accessToken);

      // 수동으로 storage 이벤트를 발생시켜 MainHeader가 감지하도록 함
      window.dispatchEvent(new Event("storage"));

      // 홈 페이지로 이동
      navigate("/");
      console.log("홈 페이지로 이동 완료.");
    } catch (error) {
      console.error("로그인 에러 발생:", error);
      setError(error.message || "로그인 요청 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <L.InputWrapper>
        <L.Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          placeholder="이메일을 입력하세요"
          error={emailError ? "true" : undefined}
        />
        {emailError && (
          <L.ErrorMessage>유효한 이메일 주소를 입력해 주세요.</L.ErrorMessage>
        )}
      </L.InputWrapper>
      <L.InputWrapper>
        <L.Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          placeholder="비밀번호를 입력해 주세요."
          error={passwordError ? "true" : undefined}
        />
        {passwordError && <L.ErrorMessage>{passwordError}</L.ErrorMessage>}
      </L.InputWrapper>
      {error && <L.ErrorMessage>{error}</L.ErrorMessage>}
      <LoginButton isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
