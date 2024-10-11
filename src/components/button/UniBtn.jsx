import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.btnSize || "fit-content"};
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  background-color: ${(props) => props.bgColor || "#ed1e25"};
  color: #ffffff;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const UniBtn = ({
  onClick,
  type = "button",
  children,
  bgColor,
  btnSize,
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      bgColor={bgColor}
      btnSize={btnSize}
      {...rest}
    >
      {children}
    </Button>
  );
};

// 사용예시1
export const BlueUniBtn = styled(UniBtn)``;
// 사용예시2
export const BigUniBtn = styled(UniBtn)``;
