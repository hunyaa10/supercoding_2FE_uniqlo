import React, { useEffect, useState } from "react";
import { containSlang } from "../../utils/validation";
import { handleKeyDown } from "../../utils/keyDownHandler";
import axios from "axios";
import {
  getItemCategories,
  getItemSizes,
  postImageUpload,
  postItemData,
} from "../../api/api";

// style
import {
  BtnBox,
  ThumbNailImg,
  ThumbNailImgBox,
  ThumbNailImgText,
  ImgBox,
  InfoInput,
  InfoLabel,
  ItemImage,
  ItemImagesBox,
  ItemInfo,
  ItemInfoBox,
  RegisterInfo,
  Container,
  InfoInputScript,
  ItemInfoScript,
  ImgUploadBtn,
} from "../../styles/userProfileStyle/itemRegisterStyle";
import UserInput from "./UserInput";
import { UniBtn } from "../button/UniBtn";
import { ErrorMessage } from "../error/ErrorMessage";

const ItemRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    expired_at: "",
    description: "",
    category: "",
    size_name: "",
    stuck: "",
    images_url: [],
  });

  const [validImages, setValidImages] = useState([]);
  const [thumbNailImg, setThumbNailImg] = useState(null);
  const [imgError, setImgError] = useState("");
  const [slangError, setSlangError] = useState({});
  const [notifyMsg, setNotifyMsg] = useState("");

  const [itemId, setItemId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

  // 이미지선택
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const newValidImages = [];
    setImgError("");

    files.forEach((file) => {
      // 파일형식 유효성검사
      if (!allowedTypes.includes(file.type)) {
        setImgError(
          "jpg, jpeg, png 형식의 이미지 파일만 업로드할 수 있습니다."
        );
      }
      // 파일용량(1MB) 유효성검사
      else if (file.size > 1 * 1024 * 1024) {
        setImgError("이미지 파일 크기는 1MB를 초과할 수 없습니다.");
      } else {
        newValidImages.push(file);
      }
    });

    setValidImages((prev) => [...prev, ...newValidImages]);
    // setValidImages(newValidImages);

    // 대표이미지 = 첫번째이미지
    if (newValidImages.length > 0) {
      setThumbNailImg(URL.createObjectURL(newValidImages[0]));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // 비속어 유효성검사
    if (containSlang(value)) {
      setSlangError((prev) => ({
        ...prev,
        [id]: "비속어를 포함할 수 없습니다.",
      }));
    } else {
      setSlangError((prev) => ({
        ...prev,
        [id]: "",
      }));
    }

    // 상품설명 길이체크
    if (id === "description" && value.length < 10) {
      setSlangError((prev) => ({
        ...prev,
        description: "상품설명은 최소 10자 이상 입력해야 합니다.",
      }));
    } else if (id === "description") {
      setSlangError((prev) => ({
        ...prev,
        description: "",
      }));
    }
  };

  // 이미지업로드버튼 >> 이미지 POST >> ✅성공
  const handleImageUpload = async () => {
    // 이미지정보 데이터
    const ImageDataUpload = new FormData();

    if (validImages.length > 0) {
      validImages.forEach((image) => {
        ImageDataUpload.append("images", image);
      });
    }

    try {
      const res = await postImageUpload(ImageDataUpload);
      setItemId(res.itemId);
      console.log("등록결과: ", res.itemId);
      setNotifyMsg("이미지업로드에 성공하였습니다!");
      return res;
    } catch (error) {
      console.error("등록오류: ", error.message);
      setNotifyMsg("이미지업로드에 실패하였습니다.");
      return;
    }
  };

  // 등록버튼 >> 전체데이터 POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSlangValid = Object.values(slangError).every(
      (error) => error === ""
    );

    if (!isSlangValid) {
      const errorInputs = [
        { id: "name", error: slangError.name },
        { id: "description", error: slangError.description },
      ];
      const firstErrorInput = errorInputs.find((input) => input.error);
      if (firstErrorInput) {
        document.getElementById(firstErrorInput.id).focus();
      }

      setNotifyMsg("잘못 입력된 정보가 존재합니다.");
      return;
    }

    // 업로드이미지 받아오기
    const uploadedImageUrls = await handleImageUpload();

    // 전체 상품정보 데이터
    const jsonData = {
      name: formData.name,
      price: parseFloat(formData.price),
      expired_at: formData.expired_at + "T00:00:00", // 로컬타임형태로 변환
      description: formData.description,
      category: formData.category,
      size_name: formData.size_name,
      stuck: parseInt(formData.stuck, 10),
      images_url: uploadedImageUrls,
    };

    try {
      const res = await postItemData(jsonData);
      setItemId(res.itemId);
      console.log("등록결과: ", res);
      setFormData(res);
      setNotifyMsg("물품등록에 성공하였습니다!");
    } catch (error) {
      console.error("등록오류: ", error.message);
      setNotifyMsg("물품등록에 실패하였습니다.");
      return;
    }
  };

  // 카테고리 데이터 GET >> ✅성공
  const fetchCategories = async () => {
    try {
      const res = await getItemCategories();
      console.log(res);
      setCategories(res.categoryList);
    } catch (error) {
      console.error("카테고리를 불러오는데 실패하였습니다.", error.message);
    }
  };
  // 사이즈 데이터 GET >> ✅성공
  const fetchSizes = async () => {
    try {
      const res = await getItemSizes();
      console.log(res);
      setSizes(res.sizeItemList);
    } catch (error) {
      console.error("사이즈를 불러오는데 실패하였습니다.", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSizes();
  }, []);

  return (
    <Container onSubmit={handleSubmit}>
      <BtnBox>
        {notifyMsg && <ErrorMessage>{notifyMsg}</ErrorMessage>}
        <UniBtn type="submit">물품등록하기</UniBtn>
      </BtnBox>
      <RegisterInfo>
        <ThumbNailImgBox>
          {thumbNailImg ? (
            <ThumbNailImg src={thumbNailImg} alt="대표이미지" />
          ) : (
            <ImgBox>상품이미지를 등록해주세요.</ImgBox>
          )}
          <ThumbNailImgText>대표이미지입니다.</ThumbNailImgText>
        </ThumbNailImgBox>
        <ItemInfoBox>
          <ItemInfo>
            <InfoLabel>상품이미지</InfoLabel>
            <InfoInput
              type="file"
              id="img"
              multiple
              onChange={handleImagesChange}
              required
            />
            <ImgUploadBtn type="button" onClick={handleImageUpload}>
              이미지업로드
            </ImgUploadBtn>
            {validImages.length > 0 && (
              <ItemImagesBox>
                {/* 이미지 여러개 중 가장 첫번째 이미지파일이 대표이미지 */}
                {validImages.map((file, idx) => (
                  <ItemImage
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt={`이미지-${idx + 1}`}
                    className={idx === 0 ? "thumbnail" : ""}
                  />
                ))}
              </ItemImagesBox>
            )}
          </ItemInfo>
          {imgError && <ErrorMessage>{imgError}</ErrorMessage>}
          <UserInput
            label="상품명"
            id="name"
            type="text"
            placeholder="상품명을 입력하세요"
            value={formData.name}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            error={slangError.name}
          />
          <UserInput
            label="가격"
            id="price"
            type="number"
            placeholder="990원 이상부터 판매가능"
            min="990"
            value={formData.price}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <UserInput
            label="카테고리"
            id="category"
            type="select"
            value={formData.category}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            error={null}
            options={[
              { value: "", label: "--카테고리--" },
              ...categories.map((category) => ({
                value: category.id,
                label: category.categoryName,
              })),
            ]}
          />
          <UserInput
            label="사이즈"
            id="size_name"
            type="select"
            value={formData.size_name}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            error={null}
            options={[
              { value: "", label: "--사이즈--" },
              ...sizes.map((size) => ({
                value: size.id,
                label: size.sizeName,
              })),
            ]}
          />
          <UserInput
            label="판매수량"
            id="stuck"
            type="number"
            placeholder="1개 이상부터 등록가능"
            min="1"
            value={formData.stuck}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <UserInput
            label="판매기간"
            id="expired_at"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={formData.expired_at}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <ItemInfoScript>
            <InfoLabel>상품설명</InfoLabel>
            <InfoInputScript
              id="description"
              as="textarea"
              placeholder="최소 10자이상 작성하세요."
              value={formData.description}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              required
            />
            {slangError.description && (
              <ErrorMessage>{slangError.description}</ErrorMessage>
            )}
          </ItemInfoScript>
        </ItemInfoBox>
      </RegisterInfo>
    </Container>
  );
};

export default ItemRegister;
