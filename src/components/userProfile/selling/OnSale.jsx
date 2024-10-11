import React, { useEffect, useState } from "react";
import { getRegisteredItemData, putItemStockData } from "../../../api/api";

// style
import {
  Container,
  ItemAmount,
  ItemBox,
  ItemDate,
  ItemImgUrl,
  ItemName,
  ItemPrice,
  ItemWrapper,
  ModifyAmountBox,
  Page,
  PageBox,
  Span,
} from "../../../styles/userProfileStyle/userSellingStyle";
import { UniBtn } from "../../button/UniBtn";

const OnSale = () => {
  const [itemsData, setItemsData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [stockValues, setStockValues] = useState({});

  // 등록된 물품 get
  const handlegetRegisteredItems = async (page) => {
    try {
      const res = await getRegisteredItemData(page);
      console.log(res);
      setItemsData(res.content);
      setTotalPages(res.totalPages);
      setCurrentPage(page);

      // 📝초기재고값 설정
      const initialStocks = res.data.content.reduce((acc, item) => {
        acc[item.id] = item.stock;
        return acc;
      }, {});
      setStockValues(initialStocks);
    } catch (error) {
      console.log("등록된 상품을 가져오는데 실패했습니다.", error.message);
    }
  };
  useEffect(() => {
    handlegetRegisteredItems(currentPage);
  }, [currentPage]);

  // 📝재고수정 데이터 put
  const updateItemStock = async (id, sizeName) => {
    const newStuck = stockValues[id];

    if (newStuck < 0 || isNaN(newStuck)) {
      console.error("유효하지 않은 재고 수량:", newStuck);
      alert("유효하지 않은 재고 수량입니다. 0 이상의 숫자를 입력해 주세요.");
      return;
    }

    try {
      const res = await putItemStockData(id, newStuck, sizeName);
      console.log("수량이 성공적으로 업데이트되었습니다:", res.data);
      handlegetRegisteredItems(currentPage);
    } catch (error) {
      console.log("수량 업데이트에 실패했습니다.", error.message);
    }
  };

  // 재고수정
  const handleStockChange = (id, value) => {
    setStockValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // 페이지네이션
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
      {/* 받아온 아이템들 */}
      {itemsData.length > 0 &&
        itemsData.map((item) => (
          <ItemWrapper>
            <ItemBox key={item.id}>
              <ItemImgUrl src={item.imageUrl} alt={item.name} />
              <ItemName>{item.name}</ItemName>
              <Span>|</Span>
              <ItemPrice>가격: {item.price.toLocaleString()}원</ItemPrice>
              <Span>|</Span>
              <ItemDate>판매기간: {item.expiredAt}</ItemDate>
            </ItemBox>
            <ModifyAmountBox>
              {/* 📝재고수량input */}
              <ItemAmount
                type="number"
                value={stockValues[item.id] !== undefined ? stockValues[item.id] : item.stock}
                onChange={(e) => handleStockChange(item.id, parseInt(e.target.value) || 0)}
                id={`stock-input-${item.id}`}
                min="0"
              />
              <UniBtn bgColor="#404040" onClick={() => updateItemStock(item.id, item.sizeName)}>
                재고수정
              </UniBtn>
            </ModifyAmountBox>
          </ItemWrapper>
        ))}
      {/* 📝페이지네이션 */}
      <PageBox>
        <UniBtn bgColor="#404040" onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </UniBtn>
        <Page>
          {currentPage} / {totalPages}
        </Page>
        <UniBtn bgColor="#404040" onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음
        </UniBtn>
      </PageBox>
    </Container>
  );
};

export default OnSale;
