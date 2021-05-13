import React from "react";
import styled from "styled-components";
import searchIcon from "../../../../../assets/images/searchButton.svg";
import {styleColor} from "../../../../../common/stylesVariables";

const InputWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  height: 50px;

  &::before {
    content: url(${searchIcon});
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 14px 10px 14px 68px;
  border-radius: 20px;
  border: none;
  outline: transparent;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  background-color: ${styleColor.HeaderInputBackgroundColor};
  color: ${styleColor.HeaderTextColor};
`

export const HeaderInput = () => {
    return (
        <InputWrapper>
            <Input placeholder={'Type here smth...'}/>
        </InputWrapper>
    )
}