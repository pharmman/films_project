import styled from 'styled-components'
import styles from './SearchPage.module.scss'
import React from 'react'
import {FilmCard} from './FilmCard/FilmCard'

const Title = styled.h1`
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 78px;
  text-align: center;
  max-width: 728px;
`

const SecondTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0;
`

export const IMDBTitle = styled(Title)`
  font-size: 12px;
  line-height: 14px;
  padding: 7px 12px;
`

export const SearchPage: React.FC = () => {
    return (
        <div className={styles.searchPage}>
            <div className={styles.container}>
                <Title className={styles.title}>Unlimited movies, TV shows, and more.</Title>
                <SecondTitle className={styles.secondTitle}>Watch anywhere. Cancel anytime.</SecondTitle>
                <form className={styles.form}>
                    <input type="text"/>
                    <button>Search</button>
                </form>
                <FilmCard/>
            </div>
        </div>
    )
}