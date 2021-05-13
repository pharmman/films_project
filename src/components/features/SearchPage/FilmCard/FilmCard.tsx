import {ImdbCard} from '../../../ImdbCard/ImdbCard'
import styled from 'styled-components'
import {FilmType} from '../../../../api/filmAPI'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {backgroundCover, styleColor} from "../../../../common/stylesVariables";

type FilmCardPropsType = {
    film: FilmType
}

const FilmCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 555px;
  max-height: 171px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(17, 17, 17, 0.8);
  overflow: hidden;
`

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 12px;
`

const Poster = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  width: 95px;
  height: 141px;
  border-radius: 8px;
  ${backgroundCover};
`

const Wrapper = styled.div`
  &.aboutFilm {
    display: flex;
    padding: 15px 0 8px 20px;
    flex-wrap: wrap;
  }

  &.descriptionContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
  }
`

const FilmDescription = styled.div`
  &.genres {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 30px;
  }

  & span {
    position: relative;
    padding-right: 20px;
  }

  & span:not(:last-child):after {
    content: '';
    position: absolute;
    top: 0;
    right: 10px;
    height: 16px;
    color: white;
    border-left: 0.5px solid ${styleColor.primaryFontColor};
    z-index: 1;
  }
}

&.awards {
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transform: rotate(0.5turn);
  }
`

export const FilmCard: React.FC<FilmCardPropsType> = ({film}) => {
    return (
        <FilmCardWrapper>
            <div>
                <NavLink to={'/film'}>
                    <Poster image={film.image}/>
                </NavLink>
            </div>
            <Wrapper className={'aboutFilm'}>
                <Wrapper className={'descriptionContainer'}>
                    <div>
                        <NavLink to={'/film'}>
                            <Title>{film.title}</Title>
                        </NavLink>
                        <FilmDescription className={'genres'}>
                            <span>{film.type}</span>
                            <span>{film.genres}</span>
                            <span>{film.year}</span>
                        </FilmDescription>
                    </div>
                    <FilmDescription className={'awards'}>{film.awards}</FilmDescription>
                </Wrapper>
                <ImdbCard rating={film.imDbRating}/>
            </Wrapper>
        </FilmCardWrapper>
    )
}