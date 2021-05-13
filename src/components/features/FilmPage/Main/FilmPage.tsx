import {Header} from './Header/Header'
import {Main} from './Main'
import styled from 'styled-components'
import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store";
import {Spinner} from "../../../Preloader/Preloader";
import {Element} from "react-scroll/modules";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const FilmPage: React.FC = () => {
    const appLoading = useSelector<AppRootStateType, boolean>(state => state.app.loading)
    return (
        <Element name={'film'}>
            <PageWrapper>
                {appLoading && <Spinner/>}
                <Header/>
                <Main/>
            </PageWrapper>
        </Element>
    )
}