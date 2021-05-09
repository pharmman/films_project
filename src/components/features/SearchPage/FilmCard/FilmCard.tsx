import styles from './FilmCard.module.scss'
import {ImdbCard} from '../../../ImdbCard/ImdbCard'
import styled from 'styled-components'

export const ThirdTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px
`



export const FilmCard = () => {
return (
    <div className={styles.filmCardContainer}>
        <div className={styles.imageContainer}>
            <div style={{backgroundColor: 'red'}}>Типа картинка</div>
        </div>
        <div className={styles.descriptionContainer}>
            <div>
            <ThirdTitle>The Queen's Gambit</ThirdTitle>
            <div>
            <p>TVSeries Drama</p>
            </div>
            </div>
            <p>Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19 nominations.</p>
        </div>
        <div className={styles.ratingContainer}>
            <ImdbCard rating={8.8}/>
        </div>
    </div>
)
}