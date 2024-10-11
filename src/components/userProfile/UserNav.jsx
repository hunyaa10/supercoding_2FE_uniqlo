import React, { useState } from "react";

import {
  Nav,
  Ul,
  Li,
  StyledNavLink,
  SellerLi,
  SellerBtnBox,
} from "../../styles/userProfileStyle/userNavStyle";
import { UniBtn } from "../button/UniBtn";

const UserNav = ({ isLogin, isSeller, handleSwitchUser }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledNavLink to="/user" end>
            개인정보
          </StyledNavLink>
        </Li>
        <SellerLi isActive={isSeller}>
          <StyledNavLink to="/user/register">물품등록 및 판매</StyledNavLink>
        </SellerLi>
        <SellerLi isActive={isSeller}>
          <StyledNavLink to="/user/selling">판매등록된 물품</StyledNavLink>
        </SellerLi>
        {/* <Li>
          <StyledNavLink to="/user/buying">구매한 물품</StyledNavLink>
        </Li> */}
      </Ul>
      <SellerBtnBox>
        {isLogin && (
          <UniBtn onClick={handleSwitchUser}>
            {isSeller ? "구매자로 변경" : "판매자로 변경"}
          </UniBtn>
        )}
      </SellerBtnBox>
    </Nav>
  );
};

export default UserNav;
