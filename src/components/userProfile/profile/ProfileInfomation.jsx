import React from "react";

// style
import {
  GenderIcon,
  Icon,
  Image,
  ProfileImg,
  Text,
  TextBox,
  Title,
  UserImg,
  UserInfo,
  UserInfoBox,
  Zonecode,
} from "../../../styles/userProfileStyle/profileStyle";

// icon
import SmileIcon from "../../../icons/smile.svg";
import PhoneIcon from "../../../icons/phone.svg";
import EmailIcon from "../../../icons/email.svg";
import MaleIcon from "../../../icons/male.svg";
import FemaleIcon from "../../../icons/female.svg";
import AddressIcon from "../../../icons/address.svg";
import PencilIcon from "../../../icons/pencil.svg";
import UserFillIcon from "../../../icons/userFill.svg";


const ProfileInfomation = ({ userInfo }) => {
  return (
    <UserInfoBox>
      <UserImg>
        <ProfileImg>
          {userInfo.profile_image_url ? (
            <Image src={userInfo.profile_image_url} alt="프로필사진" />
          ) : (
            <Image src={UserFillIcon} alt="기본프로필사진" />
          )}
        </ProfileImg>
        <Title>{userInfo.name}님, 환영합니다</Title>
      </UserImg>
      <UserInfo>
        <TextBox>
          <Icon src={SmileIcon} alt="phone-icon" />
          <Text>{userInfo.nickName}</Text>
        </TextBox>
        <TextBox>
          <Icon src={PhoneIcon} alt="phone-icon" />
          <Text>{userInfo.phone}</Text>
        </TextBox>
        <TextBox>
          <Icon src={EmailIcon} alt="email-icon" />
          <Text>{userInfo.email}</Text>
        </TextBox>
        <TextBox>
          <GenderIcon
            src={userInfo.gender === "남성" ? MaleIcon : FemaleIcon}
          />
          <Text>{userInfo.gender === "남성" ? "남성" : "여성"}</Text>
        </TextBox>
        <TextBox>
          <Icon src={AddressIcon} alt="address-icon" />
          <Zonecode>{`${userInfo.address.zipcode},`}</Zonecode>
          <Text>{userInfo.address.city}</Text>
        </TextBox>
        <TextBox>
          <Icon src={PencilIcon} alt="pencil-icon" />
          <Text>{userInfo.comment}</Text>
        </TextBox>
      </UserInfo>
    </UserInfoBox>
  );
};

export default ProfileInfomation;
