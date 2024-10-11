import React, { useEffect, useState } from "react";
import * as S from "../../styles/NavBarStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery, QueryClient } from "@tanstack/react-query";
// import { useCookies } from "react-cookie";
import logout from "../../utils/icons/logout_icon.png";
import { Link } from "react-router-dom";
// import { getCookie } from "./../../api/cookies";
import { getCategories } from "../../api/api";
import LogoIcon from "../../icons/Ulogo.svg";
import UserIcon from "../../icons/user.svg";

const categoryMapping = {
  MALE: 1,
  FEMALE: 2,
  UNISEX: 3,
  CHILDREN: 4,
};

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  // const [cookies, setCookie, removeCookie] = useCookies(["ACCESS_TOKEN"]);
  const navigate = useNavigate();

  const queryClient = new QueryClient();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        console.log(data);
        setCategories(data.categoryList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    const categoryId = categoryMapping[categoryName];
    if (categoryId) {
      navigate(`/?category_id=${categoryId}`);
    }
  };

  return (
    <>
      <S.StNavBar>
        <S.StNavbarContainer>
          <S.StLogoDiv>
            <Link to="/">
              <img alt="logo" />
            </Link>
          </S.StLogoDiv>
          <S.StCategoriesContainer>
            <S.StCategoriesUl>
              {categories.map((category) => (
                <S.StCategoriesLi
                  key={category.categoryName}
                  onClick={() => handleCategoryClick(category.categoryName)}
                >
                  {category.categoryName}
                </S.StCategoriesLi>
              ))}
            </S.StCategoriesUl>
          </S.StCategoriesContainer>
          <S.StUserSection>
            <Link to="user">
              <S.StNameDes>
                <S.StLogOut>{localStorage.getItem("name")}</S.StLogOut>
                <S.Icon src={UserIcon} alt="user-icon" />
              </S.StNameDes>
            </Link>
            <Link to={"/"}>
              <S.StLogOutContainer>
                <S.StLogOut>로그아웃</S.StLogOut>
                <S.StLogOutImg src={logout} alt="logoutImg"></S.StLogOutImg>
              </S.StLogOutContainer>
            </Link>
          </S.StUserSection>
        </S.StNavbarContainer>
      </S.StNavBar>
    </>
  );
};

export default Navbar;
