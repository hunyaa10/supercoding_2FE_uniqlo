import React from 'react';

const BasketSummary = ({ items }) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-section">
      <button>주문하기</button>
      <p>최종 금액: {totalPrice}원</p>
    </div>
  );
};

export default BasketSummary;
