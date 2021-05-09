import styled from 'styled-components'
import styles from './SearchPage.module.scss'
import React from 'react'

export const Title = styled.h1`
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

const Form = styled.form`

`


export const SearchPage:React.FC = () => {
    return (
        <div className={styles.searchPage}>
            <div className={styles.container}>
                <Title className={styles.title}>Unlimited movies, TV shows, and more.</Title>
                <SecondTitle className={styles.secondTitle}>Watch anywhere. Cancel anytime.</SecondTitle>
                <Form className={styles.form}>
                    <input type="text"/>
                    <button>Search</button>
                </Form>
            </div>
        </div>
    )
}