import React from "react";
import styled from "styled-components";
import {backgroundCover, styleColor} from "../../../common/stylesVariables";
import backgroundImage from '../../../assets/images/background.png'
import {Header} from "../FilmPage/Main/Header/Header";
import {PageWrapper} from "../FilmPage/Main/FilmPage";
import {Title} from "../SearchPage/SearchPage";
import travoltaGif from '../../../assets/images/404.gif'

const PageInner = styled.div`
  background-image: url(${backgroundImage});
  ${backgroundCover};
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${styleColor.primaryFontColor};
  font-size: 100px;
`

const Image = styled.img`
  max-width: 100%;
`

const Wrapper = styled.div`
max-width: 500px;
`

export const ErrorPage = () => {
    return (
        <PageWrapper>
            <Header/>
        <PageInner>
                <Title>Looks like you got lost.</Title>
            <Wrapper>
                <Image src={travoltaGif} alt="Travolta looks around"/>
            </Wrapper>
        </PageInner>
        </PageWrapper>
    )
}

