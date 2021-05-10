import {ImdbCard} from '../../ImdbCard/ImdbCard'
import styled from 'styled-components'
import {GetFilmResponseType} from '../../../api/filmAPI'
import React from 'react'

type FilmCardPropsType = {
    film: GetFilmResponseType
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
`

const ThirdTitle = styled.h3`
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Wrapper = styled.div`
  &.aboutFilm {
    display: flex;
    padding: 15px 20px 8px;
  }

  &.descriptionContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`

const FilmDescription = styled.p`
  &.genres {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 30px;
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
                <Poster image={film.image}/>
            </div>
            <Wrapper className={'aboutFilm'}>
                <Wrapper className={'descriptionContainer'}>
                    <div>
                        <ThirdTitle>{film.title}</ThirdTitle>
                        <FilmDescription className={'genres'}>
                            {film.type} | {film.genres} | {film.year}
                        </FilmDescription>
                    </div>
                    <FilmDescription className={'awards'}>{film.awards}</FilmDescription>
                </Wrapper>
                <ImdbCard rating={film.imDbRating}/>
            </Wrapper>
        </FilmCardWrapper>
    )
}