import React, { useEffect, useState } from "react";

// style
import {
  Container,
  ItemAmountZero,
  ItemDate,
  ItemImgUrl,
  ItemName,
  ItemPrice,
  Page,
  PageBox,
  SelledItem,
  Span,
} from "../../../styles/userProfileStyle/userSellingStyle";
import { getSoldItemData } from "../../../api/api";
import { UniBtn } from "../../button/UniBtn";

const SoldItems = () => {
  const [itemsData, setItemsData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleGetSoldItems = async (page) => {
    try {
      const res = await getSoldItemData(page);
      setItemsData(res.content);
      setTotalPages(res.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.log("등록된 상품을 가져오는데 실패했습니다.", error.message);
    }
  };

  useEffect(() => {
    handleGetSoldItems(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      {/* 판매완료아이템 */}
      {itemsData.length > 0 &&
        itemsData.map((item) => (
          <SelledItem key={item.id}>
            <ItemImgUrl src={item.imageUrl} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <Span>|</Span>
            <ItemPrice>가격: {item.price.toLocaleString()}원</ItemPrice>
            <Span>|</Span>
            <ItemDate>판매기간: {item.expiredAt}</ItemDate>
            <Span>|</Span>
            <ItemAmountZero>재고수량: {item.stock}</ItemAmountZero>
          </SelledItem>
        ))}
      {/* 페이지네이션 */}
      <PageBox>
        <UniBtn
          bgColor="#404040"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          이전
        </UniBtn>
        <Page>
          {currentPage} / {totalPages}
        </Page>
        <UniBtn
          bgColor="#404040"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          다음
        </UniBtn>
      </PageBox>
    </Container>
  );
};

export default SoldItems;
