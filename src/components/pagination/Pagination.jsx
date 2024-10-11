import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Pagination, Select, Input } from "antd";
import ReactTable from "../reactTable/ReactTable";
import { searchItems } from "../../api/api";
import styled from "styled-components";

const { Option } = Select;
const { Search } = Input;

const ItemSearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [params, setParams] = useState({
    category_id: "",
    item_name: "",
    status_condition: "",
    sort_condition: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("category_id");

  // 빈 값을 제외한 필드만 params에 포함시키는 함수
  const removeEmptyParams = (params) => {
    const validParams = {};
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        validParams[key] = params[key];
      }
    });
    return validParams;
  };

  const fetchItems = async () => {
    setLoading(true);

    try {
      const validParams = removeEmptyParams({
        ...params,
        page_number: pageNumber,
        category_id: categoryId || params.category_id,
      });

      const response = await searchItems({
        category_id: validParams.category_id,
        item_name: validParams.item_name,
        page_number: validParams.page_number,
        status_condition: validParams.status_condition,
        sort_condition: validParams.sort_condition,
      });
      console.log(response.content);
      setProducts(response.content);
      setTotalItems(response.content.length);
    } catch (error) {
      console.error("상품을 불러오는 중 오류가 발생했습니다.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [pageNumber, categoryId, params]);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  const handleSortChange = (value) => {
    setParams((prevParams) => ({
      ...prevParams,
      sort_condition: value,
    }));
  };

  const handleSearch = (value) => {
    setParams((prevParams) => ({
      ...prevParams,
      item_name: value,
    }));
  };

  return (
    <Container>
      <FilterContainer>
        <Search placeholder="상품명 검색" onSearch={handleSearch} enterButton="Search" style={{ width: 300 }} />

        <Select defaultValue="LATEST" onChange={handleSortChange} style={{ width: 200, marginLeft: "16px" }}>
          <Option value="PRICE">가격순</Option>
          <Option value="HITS">조회순</Option>
          <Option value="DEADLINE">마감임박순</Option>
          <Option value="LATEST">최신순</Option>
        </Select>
      </FilterContainer>
      <ReactTable products={products} loading={loading} />

      <StyledPagination current={pageNumber} total={totalItems} pageSize={12} onChange={handlePageChange} />
    </Container>
  );
};

export default ItemSearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  color: #ed1e25;
  gap: 100px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  .ant-select,
  .ant-input-affix-wrapper {
    border-color: #ed1e25;
  }
  .ant-input-search .ant-input:hover {
    border-color: #ed1e25;
  }
  .ant-btn-primary {
    background-color: white;
    border-color: #ed1e25;
  }

  .ant-select-selector {
    color: #ed1e25;
  }
  .ant-input-search:hover,
  .ant-input-search:focus-within {
    background-color: #ed1e25 !important;
    color: white !important;
    border-color: #ed1e25 !important;
    outline: none !important;
  }
  /* Search input hover 상태 */
  .ant-input-search:hover,
  .ant-input-affix-wrapper:hover {
    border-color: #ed1e25 !important; /* hover 시 빨간색 border */
    box-shadow: 0 0 0 2px rgba(237, 30, 37, 0.2) !important; /* hover 시 빨간색 그림자 */
    outline: none !important;
  }

  /* Search input focus-within 상태 */
  .ant-input-search:focus-within,
  .ant-input-affix-wrapper:focus-within {
    border-color: #ed1e25 !important; /* focus 시 빨간색 border */
    box-shadow: 0 0 0 2px rgba(237, 30, 37, 0.2) !important; /* focus 시 빨간색 그림자 */
    outline: none !important;
  }

  .ant-input:focus,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: #ed1e25 !important; /* 빨간색 border */
    box-shadow: 0 0 0 2px rgba(237, 30, 37, 0.2) !important; /* 빨간색 그림자 */
  }
  /* Search 버튼의 hover 상태 */
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background-color: #ed1e25 !important;
    color: white !important;
  }

  .ant-btn-primary {
    background-color: white;
    border-color: #ed1e25;
    color: black;
  }

  .ant-input {
    border-color: #ed1e25;
  }

  /* 검색창의 placeholder 텍스트 스타일 */
  .ant-input::placeholder {
    color: black;
  }

  /* Select hover & focus 상태 */
  .ant-select-selector,
  .ant-select-selector:hover,
  .ant-select-selector:focus-within,
  .ant-select-focused .ant-select-selector {
    border-color: #ed1e25 !important;
    box-shadow: none !important; /* hover 및 focus 시 box-shadow 제거 */
    outline: none !important;
  }

  /* 드롭다운 화살표 색상 변경 */
  .ant-select-arrow {
    color: #ed1e25 !important;
  }

  /* Select dropdown list 커스텀 */
  .ant-select-dropdown {
    background-color: black !important; /* 드롭다운 배경색 */
    color: black !important; /* 드롭다운 글씨색 */
  }

  /* 드롭다운 선택 항목 hover 시 */
  .ant-select-item-option:hover {
    background-color: #ed1e25 !important; /* 항목 hover 시 빨간색 배경 */
    color: white !important; /* 항목 hover 시 흰색 글씨 */
  }

  /* 선택된 항목 스타일 */
  .ant-select-item-option-selected {
    background-color: #ed1e25 !important;
    color: white !important;
  }
`;

const StyledPagination = styled(Pagination)`
  .ant-pagination-item-active {
    border-color: #ed1e25;
  }

  .ant-pagination-item-link {
    color: #ed1e25;
  }

  .ant-pagination-item-active a {
    color: #ed1e25;
  }
`;
