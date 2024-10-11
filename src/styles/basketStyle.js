import styled from 'styled-components';

export const BasketContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1% auto;
`;

export const Header = styled.h1`
  text-align: center;
  padding: 20px;
  background-color: #343a40;
  color: white;
  font-size: 28px;
  font-weight: bold;
  border-radius: 10px;
`;

export const BasketItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const BasketItem = styled.div`
  display: grid;
  grid-template-columns: 150px 2fr 1fr 100px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ItemImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;

  p {
    margin: 0;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50%;
  gap: 9px;

  button {
    padding: 10px 15px;
    font-size: 14px;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e63946;
    }
  }
`;

export const CheckoutSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  border-top: 2px solid #ccc;
  padding-top: 20px;
`;

export const OrderButton = styled.button`
  padding: 15px 30px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;
export const QuantityInput = styled.input`
  width: 50px;
  margin-right: 10px;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
// export const SizeSelect = styled.p``;
export const UniBtn = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 5px 0; /* 버튼 간의 간격을 조정 */

  &:hover {
    background-color: #e63946;
  }
`;
