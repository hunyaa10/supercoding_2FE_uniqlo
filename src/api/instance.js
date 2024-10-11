import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookies";
// import { queryAllByAltText } from "@testing-library/react";

const instance = axios.create({
  baseURL: "http://ec2-3-35-135-46.ap-northeast-2.compute.amazonaws.com:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken"); // 또는 쿠키에서 가져올 수 있음
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response) => {
//     if (response.headers.authorization) {
//       const re_access_token = response.headers.authorization.split(" ")[1];
//       removeCookie("ACCESS_TOKEN");
//       setCookie("ACCESS_TOKEN", re_access_token);
//     } else {
//     }
//     return response;
//   },

//   (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 400) {
//     }

//     if (error.response.status === 401 && !originalRequest._retry) {
//       try {
//         originalRequest._retry = true;
//         const refresh_token = localStorage.getItem("REFRESH_TOKEN");
//         originalRequest.headers["RefreshToken"] = `Bearer ${refresh_token}`;
//         return instance(originalRequest);
//       } catch (error) {
//         localStorage.removeItem("REFRESH_TOKEN");
//         localStorage.removeItem("name");
//         setCookie("ACCESS_TOKEN", "", -1);
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// 요청을 보내기 전에 JWT 토큰을 자동으로 헤더에 추가하는 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 쿠키에서 JWT 토큰을 가져옴
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
