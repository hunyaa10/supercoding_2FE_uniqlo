import styled from "styled-components";

export const StNavBar = styled.div`
  background-color: #636fd7;
  width: 100%;
  min-height: 5vh;
`;
export const StNavbarContainer = styled.div`
  width: 90%;
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const StLogoDiv = styled.div`
  background-color: red;
`;

export const StCategoriesContainer = styled.div``;

export const StCategoriesUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  font-size: 16px;
  font-weight: 700;
`;

export const StCategoriesLi = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    color: #ed1e25;
  }
`;

export const StUserSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StNameDes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
export const StLogOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
`;
export const StLogOut = styled.button`
  color: white;
  font-size: 15px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  border: 0;
`;
export const StLogOutImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const Icon = styled.img`
  width: 32px;
`;
