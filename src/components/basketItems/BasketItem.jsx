import React from 'react';

const BasketItem = ({ item }) => {
  return (
    <div className="basket-item">
      <div className="item-image">상품 이미지</div>
      <div className="item-details">
        <p>상품명: {item.name}</p>
        <p>사이즈: {item.size}</p>
        <p>금액: {item.price}원</p>
        <p>수량: {item.quantity}개</p>
      </div>
      <div className="item-actions">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default BasketItem;
