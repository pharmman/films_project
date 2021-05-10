import styles from './FilmCard.module.scss'
import {ImdbCard} from '../../../ImdbCard/ImdbCard'
import styled from 'styled-components'
import {GetFilmResponseType} from '../../../../api/filmAPI'
import React from 'react'

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

export const ThirdTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 12px;
`

const Poster = styled.div<{image: string}>`
  background-image: url(${props => props.image});
  width: 95px;
  height: 141px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

type FilmCardPropsType = {
    film: GetFilmResponseType

}


export const FilmCard: React.FC<FilmCardPropsType> = ({film}) => {


    return (
        <FilmCardWrapper>
                <div>
                <Poster image={film.image}/>
                </div>
                <div className={styles.aboutFilm}>
                <div className={styles.descriptionContainer}>
                    <div>
                        <ThirdTitle>{film.title}</ThirdTitle>
                        <div className={styles.genres}>
                            <p>{film.type} | {film.genres} | {film.year}</p>
                        </div>
                    </div>
                    <div className={styles.awards}>
                    <p>{film.awards}</p>
                    </div>
                </div>
                <div className={styles.ratingContainer}>
                    <ImdbCard rating={film.imDbRating}/>
                </div>
                </div>
        </FilmCardWrapper>
    )
}