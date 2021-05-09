import React from 'react'
import styles from './ImdbCard.module.scss'
import styled from 'styled-components'
import {Title} from '../features/SearchPage/SearchPage'

type ImdbCardPropsType = {
    rating: any
}

const IMDBTitle = styled(Title)`
  font-size: 12px;
  line-height: 14px;
  padding: 7px 12px;
`

export const ImdbCard: React.FC<ImdbCardPropsType> = ({rating}) => {
    return (
        <div className={styles.card}>
            <IMDBTitle>IMDB {rating}</IMDBTitle>
        </div>
    )
}