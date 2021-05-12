import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../app/store'
import {GetFilmResponseType} from '../../../api/filmAPI'
import styled from 'styled-components'
import {ImdbCard} from '../../ImdbCard/ImdbCard'
import {styleColor} from '../../../common/stylesVariables'

const MainWrapper = styled.div<{ image: string | null }>`
  min-height: 100vh;
  background: #eb01a5;
  background-image: url(${props => props.image});
  background-image: linear-gradient(90deg, #111111 19%, rgba(17, 17, 17, 0) 99.75%), url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${styleColor.primaryFontColor};
  height: 100%;
  padding: 120px 0 100px 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 72px;
  font-weight: 900;
  line-height: 88px;
  max-width: 566px;
  margin-bottom: 30px;
`

const Button = styled.button`
  height: 64px;
  width: 200px;
  border: 2px solid #FBFBFB;
  border-radius: 40px;
  background: transparent;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  color: #FBFBFB;
  margin-bottom: 50px;
`

const Awards = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  max-width: 433px;
`

const Genres = styled.span`
  padding-left: 36px;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
`

const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
`


export const Main = () => {
    const film = useSelector<AppRootStateType, GetFilmResponseType>(state => state.film)

    return (
        <MainWrapper image={film.images.items[0].image}>
            <div className={'top'}>
                <Title>{film.title}</Title>
                <GenresWrapper>
                    <ImdbCard inlineProps={true} rating={film.imDbRating}/>
                    <Genres>{film.genres} | {film.type} | {film.year}</Genres>
                </GenresWrapper>
            </div>
            <div>
                <Button>Watch</Button>
                <Awards>{film.awards}</Awards>
            </div>
        </MainWrapper>
    )
}