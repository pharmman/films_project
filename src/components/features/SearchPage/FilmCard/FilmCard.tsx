import styles from './FilmCard.module.scss'
import {ImdbCard} from '../../../ImdbCard/ImdbCard'
import styled from 'styled-components'
import {GetFilmResponseType} from '../../../../api/filmAPI'
import React from 'react'

export const ThirdTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin: 0;
`

type FilmCardPropsType = {
    film: GetFilmResponseType
}


export const FilmCard: React.FC<FilmCardPropsType> = ({film}) => {

    const poster = {
        backgroundImage: `url(${film.image}`
    }

    return (
        <div className={styles.filmCardContainer}>
            <div className={styles.cardInner}>
                <div>
                <div style={poster} className={styles.image}>
                </div>
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
            </div>
        </div>
    )
}