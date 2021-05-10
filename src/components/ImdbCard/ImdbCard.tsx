import React from 'react'
import styles from './ImdbCard.module.scss'
import styled from 'styled-components'

type ImdbCardPropsType = {
    rating: string
}

export const IMDBTitle = styled.h4`
  font-weight: 900;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  padding: 7px 12px;
`


export const ImdbCard: React.FC<ImdbCardPropsType> = ({rating}) => {
    return (
        <div className={styles.card} style={{color: 'black'}}>
            <IMDBTitle>IMDB {rating}</IMDBTitle>
        </div>
    )
}