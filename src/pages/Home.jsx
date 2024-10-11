import React, { useEffect, useState } from "react";
import * as S from "../styles/StyleHome";
import Navbar from "../components/navBar/NavBar";
import { searchItems } from "../api/api";
import { useLocation } from "react-router-dom";
import Card from "../components/card/Card";
import ReactTable from "../components/reactTable/ReactTable";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
  const [items, SetItems] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("category_id");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await searchItems({ category_id: categoryId });
        console.log(data.content);
        SetItems(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (categoryId) {
      fetchItems(); // category_id가 있을 때만 API 호출
    }
    fetchItems();
  }, [categoryId]);

  return (
    <S.PageContainer>
      <S.ContentWrapper>
        <Pagination />
      </S.ContentWrapper>
    </S.PageContainer>
  );
};

export default Home;
