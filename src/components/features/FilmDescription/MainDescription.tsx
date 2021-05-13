import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../app/store'
import {SimilarFilm} from './SimilarFilm'

const MainDescriptionWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 10% 60px 10%;
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 52px;
  max-width: 800px;
  margin-bottom: 30px;
`

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #323232;
  max-width: 800px;
`

const SecondTitle = styled.h3`
  font-size: 24px;
  font-weight: 900;
  line-height: 52px;
  margin-bottom: 20px;
  overflow-wrap: break-word;
`

const SimilarFilms = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const MainDescription = () => {

    const film = useSelector<AppRootStateType, GetFilmResponseType>(state => state.film)
    const similarFilms = film.similars?.slice(0, 4)

    return (
        <MainDescriptionWrapper>
            <section>
                <Title>Watch {film.title} on Richbee Shows</Title>
                <Paragraph>{film.plot}</Paragraph>
            </section>
            <section>
                <SecondTitle>You may also like</SecondTitle>
                <SimilarFilms>
                    {similarFilms.map(f => <SimilarFilm key={f.id} film={f}/>)}
                </SimilarFilms>
            </section>
        </MainDescriptionWrapper>
    )
}