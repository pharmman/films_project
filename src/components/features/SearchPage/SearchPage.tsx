import styled from 'styled-components'
import styles from './SearchPage.module.scss'

const Title = styled.h1`
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 78px;
  text-align: center;
  max-width: 728px;
  margin: 200px 0 40px 0;
`

const SecondTitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0;
  margin: 0;
`

const Form = styled.form`
margin: 80px 0 20px ;
`


export const SearchPage = () => {
    return (
        <div className={styles.searchPage}>
            <div className={styles.container}>
                <Title>Unlimited movies, TV shows, and more.</Title>
                <SecondTitle>Watch anywhere. Cancel anytime.</SecondTitle>
                <Form>
                    <input type="text"/>
                    <button>Search</button>
                </Form>
            </div>
        </div>
    )
}