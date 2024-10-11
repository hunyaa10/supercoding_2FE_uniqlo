import styled from "styled-components";

export const Warpper = styled.div`
  width: 80vw;
`;

export const Container = styled.div`
  background-color: #f4f6f8;
`;
export const ItemsUl = styled.ul`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
`;
export const ItemLi = styled.li`
  margin: auto;
  width: 70%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 1px #d6d8db;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
export const LiTitleBox = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const LiTitle = styled.h4``;
export const Image = styled.div`
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 0.125rem;
  background-color: #ccc;
  font-size: 0.6rem;
  text-align: center;
  line-height: 50px;
`;
export const ItemInfo = styled.div`
  display: flex;
`;
export const ItemInfoText = styled.div`
  width: calc(100% - 100px);
  margin-left: 1rem;
`;
export const ItemInfoTextInner = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  font-weight: 500;
  margin-right: 0.5rem;
`;
export const Amount = styled.p`
  font-size: 0.8rem;
  color: #666;
`;
export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;
export const CsText = styled.span`
  display: block;
  float: right;
  font-size: 0.8rem;
  color: #777;
`;
export const ReceiptBox = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ReceiptInfo = styled.div`
  width: 50%;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #f3f5f7;
  color: #666;
  font-weight: 500;
`;
export const PaymentInfo = styled(ReceiptInfo)``;
