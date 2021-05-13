import {Header} from './Header/Header'
import {Main} from './Main'
import styled from 'styled-components'
import React from 'react'

export const FilmPageWrapper = styled.div`
min-height: 100vh;
  display: flex;
  flex-direction: column;
`


export const FilmPage: React.FC = () => {
    return (
        <FilmPageWrapper>
            <Header/>
            <Main/>
        </FilmPageWrapper>
    )
}