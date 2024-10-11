import React from "react";
import {
  InfoLabel,
  InfoInput,
  InputWrapper,
} from "../../styles/userProfileStyle/userInputStyle";
import { ErrorMessage } from "../error/ErrorMessage";

const UserInput = ({
  label,
  id,
  type,
  placeholder,
  min,
  value,
  onChange,
  onKeyDown,
  error,
  options,
}) => {
  return (
    <InputWrapper>
      <InfoLabel>{label}</InfoLabel>
      {type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          required
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <InfoInput
          type={type}
          id={id}
          placeholder={placeholder}
          min={min}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          required
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default UserInput;
