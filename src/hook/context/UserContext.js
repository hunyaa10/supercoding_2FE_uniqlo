import React, { createContext, useState } from "react";

// UserContext 생성
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 사용자 정보 상태

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
