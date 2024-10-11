import React from "react";
import {
  AddressBtn,
  BottomBox,
  Dot,
  ExplainBox,
  ExplainText,
  InfoBox,
  InfoBoxImg,
  InfoBoxImgText,
  InfoBoxIntro,
  InfoTextIntro,
  Input,
  InputAddress,
  InputIntro,
  InputZonecode,
  Label,
  LabelBox,
  ModifyBox,
  ModifyWarpper,
  ModiInfoBox,
  PreviewImg,
  RadioInput,
  RadioLabel,
} from "../../../styles/userProfileStyle/profileStyle";
import { ErrorMessage } from "../../error/ErrorMessage";
import { InfoText } from "../../../styles/userProfileStyle/itemRegisterStyle";
import { UniBtn } from "../../button/UniBtn";
import { handleKeyDown } from "../../../utils/keyDownHandler";

const ProfileModify = ({
  previewImg,
  handleModify,
  handleImgChange,
  imgError,
  inputValues,
  changeInputValue,
  slangError,
  phoneError,
  emailError,
  handleGenderChange,
  isValidModify,
  setFormData,
}) => {
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
          // console.log("주소:", data);
          setFormData({
            zonecode,
            address,
          });
        },
      }).open();
    };
    document.body.appendChild(script);
  };
  return (
    <ModifyWarpper>
      <ModifyBox onSubmit={handleModify}>
        <ModiInfoBox>
          <InfoBoxImg>
            {previewImg && <PreviewImg src={previewImg} alt="미리보기" />}
            <InfoBoxImgText>
              <Label>프로필사진</Label>
              <Input id="img" type="file" onChange={handleImgChange} />
            </InfoBoxImgText>
            {imgError && <ErrorMessage>{imgError}</ErrorMessage>}
          </InfoBoxImg>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="name">이름</Label>
                <Dot />
              </LabelBox>
              <Input
                id="name"
                type="text"
                value={inputValues.name}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
            {slangError.name && <ErrorMessage>{slangError.name}</ErrorMessage>}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="nickName">닉네임</Label>
                <Dot />
              </LabelBox>
              <Input
                id="nickName"
                type="text"
                value={inputValues.nickName}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
            {slangError.nickName && (
              <ErrorMessage>{slangError.nickName}</ErrorMessage>
            )}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="phone">전화번호</Label>
                <Dot />
              </LabelBox>
              <Input
                id="phone"
                type="tel"
                value={inputValues.phone}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
            {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label htmlFor="email">이메일</Label>
                <Dot />
              </LabelBox>
              <Input
                id="email"
                type="text"
                value={inputValues.email}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoText>
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InfoBox>
          <InfoBox>
            <InfoText>
              <LabelBox>
                <Label>성별</Label>
                <Dot />
              </LabelBox>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="남성"
                  checked={inputValues.gender === "남성"}
                  onChange={handleGenderChange}
                />
                남성
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="여성"
                  checked={inputValues.gender === "여성"}
                  onChange={handleGenderChange}
                />
                여성
              </RadioLabel>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="zipcode">우편번호</Label>
              <InputZonecode
                id="zipcode"
                type="text"
                placeholder="우편번호"
                value={inputValues.address.zipcode}
                readOnly
              />
              <AddressBtn type="button" onClick={handleAddressSearch}>
                주소 검색
              </AddressBtn>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              <Label htmlFor="city">상세주소</Label>
              <InputAddress
                id="city"
                type="text"
                placeholder="상세주소를 입력하세요"
                value={inputValues.address.city}
                onChange={changeInputValue}
              />
            </InfoText>
          </InfoBox>
          <InfoBoxIntro>
            <InfoTextIntro>
              <Label htmlFor="comment">소개</Label>
              <InputIntro
                id="comment"
                as="textarea"
                value={inputValues.comment}
                onChange={changeInputValue}
                onKeyDown={handleKeyDown}
              />
            </InfoTextIntro>
            {slangError.comment && (
              <ErrorMessage>{slangError.comment}</ErrorMessage>
            )}
          </InfoBoxIntro>
        </ModiInfoBox>
        <ExplainBox>
          <Dot />
          <ExplainText>표시된 항목은 필수입력 항목입니다.</ExplainText>
        </ExplainBox>
        <BottomBox>
          <ErrorMessage>{isValidModify}</ErrorMessage>
          <UniBtn type="submit">프로필수정</UniBtn>
        </BottomBox>
      </ModifyBox>
    </ModifyWarpper>
  );
};

export default ProfileModify;
