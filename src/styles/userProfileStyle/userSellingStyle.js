import styled from "styled-components";

export const Warpper = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: #f4f6f8;
`;

export const TitleBox = styled.ul`
  width: 100%;
  padding-left: 3rem;
  border-bottom: 1px solid #ccd3d750;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.li`
  margin-right: 1rem;
  padding: 0 1rem;
  line-height: 8vh;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 3px solid ${({ isActive }) => (isActive ? "#ED1E25" : "#fff")};
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  background-color: #f4f6f8;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #d6d8db;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px 1px #d6d8db;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ItemImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ececec;
  border-radius: 0.25rem;
  text-align: center;
  line-height: 50px;
  font-size: 0.8rem;
  color: #666;
`;
export const ItemImgUrl = styled.img`
  width: 100px;
  height: 100px;
`;
export const ItemName = styled.p``;
export const ItemPrice = styled.p``;
export const ItemAmount = styled.input``;
export const ItemAmountZero = styled.p``;
export const ItemDate = styled.p``;
export const Span = styled.span`
  color: #ccc;
`;

export const SelledItem = styled(ItemWrapper)`
  justify-content: flex-start;
  gap: 1rem;
  opacity: 0.5;
`;

// 수정버튼 스타일
export const ModifyAmountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ModifyAmountBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
  }
`;
export const AmountIcon = styled.img``;
export const ModifyAmountNumber = styled.p``;

// 페이지네이션 스타일
export const PageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const Page = styled.p``;
