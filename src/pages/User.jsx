import React, { useState } from "react";
import UserNav from "../components/userProfile/UserNav";
import { Outlet } from "react-router-dom";
import { postToSeller } from "../api/api";

const User = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  const handleSwitchUser = async () => {
    // if (isSeller === false) {
    //   try {
    //     const res = await postToSeller();
    //     if (res.success) {
    //       setIsSeller(true);
    //     }
    //   } catch (error) {
    //     console.error("판매자 전환에 실패했습니다:", error.message);
    //   }
    // } else {
    //   setIsSeller(false);
    // }
    /////서버오류시
    setIsSeller(!isSeller);
  };
  return (
    <>
      <UserNav
        isLogin={isLogin}
        isSeller={isSeller}
        handleSwitchUser={handleSwitchUser}
      />
      <Outlet context={{ isLogin, setIsLogin }} />
    </>
  );
};

export default User;
