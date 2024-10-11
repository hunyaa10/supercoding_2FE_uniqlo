import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const ReactTable = ({ products, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (products.length === 0) {
    return <div>아이템이 없습니다.</div>;
  }

  const handleCardClick = (item_id) => {
    navigate(`/product/${item_id}`);
  };
  return (
    <Row gutter={[16, 16]} style={{ margin: "0 auto", width: "100%" }}>
      {products.map((product) => (
        <Col key={product.item_id} xs={24} sm={12} md={8} lg={6}>
          <StyledCard
            hoverable
            onClick={() => handleCardClick(product.item_id)}
            cover={
              <img
                alt={product.item_name}
                src={product.thumbnail_url || "https://via.placeholder.com/150"}
                style={{
                  height: "400px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            }
          >
            <Meta title={product.item_name} description={`₩${product.price}`} />
          </StyledCard>
        </Col>
      ))}
    </Row>
  );
};

export default ReactTable;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ed1e25;

  .ant-card-meta-title,
  .ant-card-meta-description {
    color: #ed1e25;
  }

  &:hover {
    border-color: #ed1e25;
  }
`;
