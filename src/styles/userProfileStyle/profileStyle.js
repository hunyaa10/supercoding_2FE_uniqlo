import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80vw;
`;
export const LoginText = styled.p`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.2rem;
`;

export const UserInfoBox = styled.div`
  width: 100%;
  padding: 3rem 0;
  margin: auto;
  text-align: center;
  border-bottom: 1px solid #ccd3d750;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const UserImg = styled.div``;
export const UserInfo = styled.div`
  width: 40%;
`;
export const ProfileImg = styled.figure`
  margin: auto;
  width: 150px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  background-color: #ececec;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Title = styled.h2`
  margin: 2rem 0;
`;
export const TextBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Icon = styled.img`
  display: block;
  width: 20px;
  margin-right: 1rem;
`;
export const GenderIcon = styled(Icon)`
  width: 16px;
`;
export const Text = styled.p``;
export const Zonecode = styled.p`
  margin-right: 0.5rem;
`;

export const ModifyWarpper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #f4f6f8;
`;
export const ModifyBox = styled.form`
  margin: auto;
  width: 60%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 0 10px 1px #d6d8db;
  background-color: #fff;
`;
export const ModiInfoBox = styled.div``;
export const PreviewImg = styled.img`
  width: 100px;
  margin: 1rem auto;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
`;
export const InfoBoxImgText = styled(InfoBox)`
  flex-direction: row;
  align-items: center;
`;
export const InfoBoxImg = styled(InfoBox)`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0;
`;
export const InfoBoxIntro = styled(InfoBox)`
  align-items: flex-start;
`;
export const InfoText = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoTextIntro = styled(InfoText)`
  align-items: flex-start;
`;
export const Label = styled.label``;
export const RadioLabel = styled.label`
  margin: 0 0.5rem;
`;
export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;
export const RadioInput = styled.input`
  margin-right: 0.25rem;
`;
export const InputZonecode = styled(Input)`
  width: 100px;
`;
export const InputAddress = styled(Input)`
  width: 350px;
`;
export const AddressBtn = styled.button`
  padding: 0.125rem 0.5rem;
`;

export const InputIntro = styled(Input)`
  width: 400px;
  height: 150px;
  resize: vertical;
  overflow-y: auto;
`;

export const ModifyBtn = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const LabelBox = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const ExplainBox = styled.div`
  display: flex;
  margin-top: 1rem;
`;
export const ExplainText = styled.p`
  color: #666;
  font-size: 14px;
  font-weight: 600;
`;
export const Dot = styled.span`
  display: block;
  width: 4px;
  height: 4px;
  background-color: #ed1e25;
  border-radius: 100%;
`;
export const BottomBox = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

// export const ErrorMsg = styled.span`
//   display: block;
//   color: #ed1e25;
//   font-size: 0.9rem;
//   font-weight: 500;
// `;
