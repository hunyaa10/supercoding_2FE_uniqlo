import styled from 'styled-components';

export const PaymentPage = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 28px;
`;

export const SubTitle = styled.h2`
  text-align: center;
  color: #34495e;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const OrderSummary = styled.h3`
  text-align: right;
  font-size: 22px;
  color: black;
  margin-top: 20px;
`;

export const PaymentInfo = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
  }
`;

export const AddressDetails = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddressInput = styled(Input)`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const CartItems = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemDetailSpan = styled.span`
  font-size: 14px;
  color: #555;
  margin-right: 15px;
  flex: 1;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #e60023;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c9001f;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SizeDetail = styled(ItemDetailSpan)`
  margin-left: 40%;
`;
