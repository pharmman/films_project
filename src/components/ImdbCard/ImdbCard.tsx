import React from 'react'
import styles from './ImdbCard.module.scss'
import {IMDBTitle} from '../features/SearchPage/SearchPage'

type ImdbCardPropsType = {
    rating: string
}


export const ImdbCard: React.FC<ImdbCardPropsType> = ({rating}) => {
    return (
        <div className={styles.card} style={{color: 'black'}}>
            <IMDBTitle>IMDB {rating}</IMDBTitle>
        </div>
    )
}