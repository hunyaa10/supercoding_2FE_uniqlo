import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Signup from "../pages/Signup";
import Profile from "../components/userProfile/profile/Profile";
import Register from "../pages/Register";
import Selling from "../pages/Selling";
import Buying from "../pages/Buying";
import Login from "../pages/Login";
import Basket from "../pages/Basket";
import Payment from "../pages/Payment";
import MainHeader from "../components/mainHeader/MainHeader";
import ProductDetail from "../pages/ProductDetail";
import { UserProvider } from "../hook/context/UserContext";

const Router = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="selling" element={<Selling />} />
            <Route path="buying" element={<Buying />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:item_id" element={<ProductDetail />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default Router;
