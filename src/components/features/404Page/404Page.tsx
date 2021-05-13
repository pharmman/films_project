import React from "react";
import styled from "styled-components";
import {styleColor} from "../../../common/stylesVariables";
import backgroundImage from '../../../assets/images/background.png'
import {Header} from "../FilmPage/Header/Header";
import {FilmPageWrapper} from "../FilmPage/FilmPage";
import {Title} from "../SearchPage/SearchPage";
import travoltaGif from '../../../assets/images/404.gif'

const PageWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
    return (<FilmPageWrapper>
            <Header/>
        <PageWrapper>
                <Title>Looks like you got lost.</Title>
            <Wrapper>
                <Image src={travoltaGif} alt="Travolta looks around"/>
            </Wrapper>
        </PageWrapper>
        </FilmPageWrapper>
    )
}

