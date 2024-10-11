export const setCookie = (name, value, options = {}) => {
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};

export const removeCookie = (name, options = {}) => {
  // 기본적으로 삭제 시에도 path를 "/"로 설정
  setCookie(name, "", { ...options, "max-age": -1, path: "/" });
};
