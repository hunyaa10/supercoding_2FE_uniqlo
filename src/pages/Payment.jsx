import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  PaymentPage,
  Title,
  SubTitle,
  OrderSummary,
  PaymentInfo,
  Label,
  Input,
  AddressDetails,
  AddressInput,
  CartItems,
  CartItem,
  CartItemImage,
  ItemDetails,
  ItemDetailSpan,
  PaymentButton,
  SizeDetail,
} from "../styles/payMentStyle";
import axios from "axios";

const Payment = () => {
  const location = useLocation();
  const { state } = location;
  const [cartItems, setCartItems] = useState(state?.items || []);
  const [paymentInfo, setPaymentInfo] = useState({
    email: "",
    address: "",
    city: "",
    detailedAddress: "",
    postalCode: "",
  });
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems]);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePayment = async () => {
    const orderItems = cartItems.map((item) => ({
      cart_item_id: item.id,
      item_id: item.id,
      size: item.size,
      quantity: item.newQuantity || item.quantity,
    }));

    try {
      const response = await axios.post(
        "http://ec2-3-35-136-77.ap-northeast-2.compute.amazonaws.com:8080 /orders",
        {
          customer_email: paymentInfo.email,
          city: paymentInfo.city,
          street: paymentInfo.detailedAddress,
          zipcode: paymentInfo.postalCode,
          items: orderItems,
        }
      );

      if (response.status === 200) {
        alert("결제가 성공적으로 완료되었습니다!");
      } else {
        alert("결제에 실패했습니다.");
      }
    } catch (error) {
      console.error("결제 처리 중 오류 발생:", error);
    }
  };

  return (
    <PaymentPage>
      <Title>결제 정보</Title>
      <PaymentInfo>
        <Label>이메일 주소</Label>
        <Input
          type="email"
          name="email"
          value={paymentInfo.email}
          onChange={handleInputChange}
          required
        />
        <Label>거주 주소</Label>
        <Input
          type="text"
          name="address"
          value={paymentInfo.address}
          onChange={handleInputChange}
          required
        />
        <AddressDetails>
          <AddressInput
            type="text"
            name="city"
            placeholder="도시"
            value={paymentInfo.city}
            onChange={handleInputChange}
            required
          />
          <AddressInput
            type="text"
            name="detailedAddress"
            placeholder="상세주소"
            value={paymentInfo.detailedAddress}
            onChange={handleInputChange}
            required
          />
          <AddressInput
            type="text"
            name="postalCode"
            placeholder="우편번호"
            value={paymentInfo.postalCode}
            onChange={handleInputChange}
            required
          />
        </AddressDetails>
      </PaymentInfo>

      <SubTitle>주문 리스트</SubTitle>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemDetailSpan>{item.name}</ItemDetailSpan>
                <SizeDetail>{item.size}</SizeDetail>
                <ItemDetailSpan>수량: {item.quantity}</ItemDetailSpan>
                <ItemDetailSpan>가격: {item.price}원</ItemDetailSpan>
              </ItemDetails>
            </CartItem>
          ))
        ) : (
          <div>장바구니가 비어 있습니다.</div>
        )}
      </CartItems>

      <OrderSummary>최종 결제 금액: {totalAmount}원</OrderSummary>
      <PaymentButton onClick={handlePayment}>주문하기</PaymentButton>
    </PaymentPage>
  );
};

export default Payment;
