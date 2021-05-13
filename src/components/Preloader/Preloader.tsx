import styled from "styled-components";
import preloader from "../../assets/images/spinner.svg";
import React from "react";

export const Preloader = styled.div`
  align-items: center;
  background: rgba(23, 22, 22, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s linear;
  width: 100%;
  z-index: 9999;
`

export const Spinner = () => {
    return (
        <Preloader>
            <img src={preloader} alt={'spinner'}/>
        </Preloader>
    )
}