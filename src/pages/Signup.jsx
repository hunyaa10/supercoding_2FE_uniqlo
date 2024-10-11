import React, { useEffect, useState } from "react";
import * as S from "../styles/SignupStyle";
import {
  isValidEmail,
  isValidPassword,
  isValidPhone,
  containSlang,
} from "../utils/validations";

import { useNavigate } from "react-router-dom";
import { checkEmail, formSubmit } from "../api/api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone_number: "",
    address: {
      city: "",
      zipcode: "",
    },
    gender: "",
    name: "",
    nickname: "",
  });

  const [terms, setTerms] = useState({
    allAgree: false,
    service: false,
    personalInfo: false,
    marketing: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const formFieldsFilled =
      formData.email !== "" &&
      formData.password !== "" &&
      formData.confirmPassword !== "" &&
      formData.phone_number !== "" &&
      formData.address !== "" &&
      formData.gender !== "" &&
      formData.name !== "" &&
      formData.nickname !== "";

    const noErrors = Object.keys(errors).length === 0;

    const termsAccepted = terms.service && terms.personalInfo;

    setIsFormValid(formFieldsFilled && noErrors && termsAccepted);
  }, [formData, errors, terms]);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "email") {
      if (!isValidEmail(value)) {
        newErrors.email = "유효하지 않은 이메일 형식입니다.";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "password") {
      if (!isValidPassword(value)) {
        newErrors.password =
          "비밀번호는 8자에서 20자 사이여야 하며, 최소 하나의 문자와 하나의 숫자를 포함해야 합니다.";
      } else {
        delete newErrors.password;
      }
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    if (name === "phone_number") {
      if (!isValidPhone(value)) {
        newErrors.phone_number = "전화번호 형식은 000-0000-0000여야 합니다.";
      } else {
        delete newErrors.phone_number;
      }
    }

    if (name === "nickname") {
      if (containSlang(value)) {
        newErrors.nickname = "닉네임에 부적절한 언어가 포함되어 있습니다.";
      } else {
        delete newErrors.nickname;
      }
    }

    setErrors(newErrors); // 에러 상태 업데이트
  };

  // 이메일 중복 체크
  const handleEmailCheck = async () => {
    try {
      const response = await checkEmail(email);

      if (response.status === 200) {
        setEmailMessage("사용 가능한 이메일입니다.");
        setEmailStatus(true);
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        // 상태 코드 409 (중복된 이메일)
        if (status === 409) {
          setEmailMessage(data.message);
          setEmailStatus(false);
        }

        // 상태 코드 400 (유효성 검증 오류)
        if (status === 400 && data.field_errors) {
          const emailError = data.field_errors.find(
            (error) => error.field === "email"
          );

          if (emailError) {
            setEmailMessage(emailError.message);
          }
          setEmailStatus(false); // 이메일 사용 불가능 상태 설정
        }
      } else {
        console.error("이메일 체크 중 알 수 없는 오류 발생:", error);
        setEmailMessage("이메일 확인 중 오류가 발생했습니다."); // 기타 오류 처리
        setEmailStatus(false); // 오류 시 사용 불가능 상태로 설정
      }
    }
  };

  // 입력 필드 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 주소 검색 처리
  const handleAddressSearch = () => {
    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    script.onload = () => {
      new window.daum.Postcode({
        oncomplete: (data) => {
          const { zonecode, address } = data;
          setFormData((prevData) => ({
            ...prevData,
            address: {
              ...prevData.address,
              zipcode: zonecode,
              city: address,
            },
          }));
        },
      }).open();
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    const formFieldsFilled =
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.phone_number &&
      formData.address &&
      formData.gender &&
      formData.name &&
      formData.nickname;

    const noErrors = Object.keys(errors).length === 0;

    setIsFormValid(formFieldsFilled && noErrors);
  }, [formData, errors]);

  const handleGenderChange = (gender) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: prevData.gender === gender ? "" : gender,
    }));
  };

  const handleTermsChange = (e) => {
    const { name, checked } = e.target;

    setTerms((prevTerms) => {
      const updatedTerms = {
        ...prevTerms,
        [name]: checked,
      };

      if (
        name !== "allAgree" &&
        (!updatedTerms.service ||
          !updatedTerms.personalInfo ||
          !updatedTerms.marketing)
      ) {
        updatedTerms.allAgree = false;
      }

      if (name === "allAgree") {
        updatedTerms.service = checked;
        updatedTerms.personalInfo = checked;
        updatedTerms.marketing = checked;
      }

      if (
        updatedTerms.service &&
        updatedTerms.personalInfo &&
        updatedTerms.marketing
      ) {
        updatedTerms.allAgree = true;
      }

      return updatedTerms;
    });
  };

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...dataToSend } = formData;
    try {
      const response = await formSubmit(dataToSend);
      if (response.message === "success signup") {
        navigate("/users/login");
        alert("회원가입 성공");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    }
  };

  return (
    <S.Container>
      <S.FormContainer>
        <S.Header>회원가입</S.Header>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <S.SignupInput
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleChange}
            />
          </S.InputContainer>
          <S.SignupInput
            type="text"
            name="nickname"
            placeholder="닉네임을 입력하세요"
            value={formData.nickname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <S.InputContainer>
            <S.InputWrapper>
              <S.SignupInput
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                style={{ marginRight: "15px" }}
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value); // 이메일 상태 업데이트
                }}
                onBlur={handleBlur}
              />
              <S.SmallButton type="button" onClick={handleEmailCheck}>
                이메일 확인
              </S.SmallButton>
            </S.InputWrapper>
          </S.InputContainer>
          {errors.email && <S.ErrorMsg>{errors.email}</S.ErrorMsg>}
          {emailMessage && (
            <S.EmailStatusMessage success={emailStatus}>
              {emailMessage}
            </S.EmailStatusMessage>
          )}

          <S.SignupInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <S.ErrorMsg>{errors.password}</S.ErrorMsg>}

          <S.SignupInput
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && (
            <S.ErrorMsg>{errors.confirmPassword}</S.ErrorMsg>
          )}
          <S.SignupInput
            type="text"
            name="phone_number"
            placeholder="전화번호를 입력하세요"
            value={formData.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone_number && (
            <S.ErrorMsg>{errors.phone_number}</S.ErrorMsg>
          )}

          <S.InputWrapper>
            <S.SignupInput
              type="text"
              name="zipcode"
              placeholder="우편번호"
              style={{ marginRight: "15px" }}
              value={formData.address.zipcode}
              readOnly
            />
            <S.SmallButton type="button" onClick={handleAddressSearch}>
              주소찾기
            </S.SmallButton>
          </S.InputWrapper>
          <S.SignupInput
            type="text"
            name="address"
            placeholder="주소를 입력하세요"
            value={formData.address.city}
            readOnly
          />
          <S.GenderWrapper>
            <S.GenderLabel>
              <S.Checkbox
                type="checkbox"
                name="male"
                checked={formData.gender === "MALE"}
                onChange={() => handleGenderChange("MALE")}
              />
              남성
            </S.GenderLabel>
            <S.GenderLabel>
              <S.Checkbox
                type="checkbox"
                name="female"
                checked={formData.gender === "FEMALE"}
                onChange={() => handleGenderChange("FEMALE")}
              />
              여성
            </S.GenderLabel>
          </S.GenderWrapper>
          <hr />
          <S.TermsContainer>
            <S.TermsHeader>
              서비스 이용 약관과 개인정보 수집 및 이용을 확인하시고, 만 14세
              이상임에 동의하신 후 미리 보기 화면으로 이동하시기 바랍니다.
            </S.TermsHeader>
            <S.TermsWrapper>
              <S.Checkbox
                type="checkbox"
                name="allAgree"
                checked={terms.allAgree}
                onChange={handleTermsChange}
              />
              모든 항목에 동의합니다.
            </S.TermsWrapper>
            <S.TermsWrapper>
              <S.Checkbox
                type="checkbox"
                name="service"
                checked={terms.service}
                onChange={handleTermsChange}
              />
              [서비스 이용약관] (필수)
            </S.TermsWrapper>
            <S.TermsWrapper>
              <S.Checkbox
                type="checkbox"
                name="personalInfo"
                checked={terms.personalInfo}
                onChange={handleTermsChange}
              />
              [개인정보 수집 및 이용 동의] (필수)
            </S.TermsWrapper>
            <S.TermsWrapper>
              <S.Checkbox
                type="checkbox"
                name="marketing"
                checked={terms.marketing}
                onChange={handleTermsChange}
              />
              마케팅 수신 동의 (선택)
            </S.TermsWrapper>
          </S.TermsContainer>
          <S.SubmitButtonWrapper>
            <S.SubmitButton type="submit" disabled={!isFormValid}>
              가입
            </S.SubmitButton>
          </S.SubmitButtonWrapper>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
