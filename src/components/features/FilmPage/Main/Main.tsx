import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../app/store'
import styled from 'styled-components'
import {ImdbCard} from '../../../ImdbCard/ImdbCard'
import {backgroundCover, styleColor} from '../../../../common/stylesVariables'
import {useEffect, useState} from 'react'
import {FilmType} from "../../../../api/filmAPI";
import {getSimilarFilmData} from "../../SimilarFilms/similarFilms-reducer";

const MainWrapper = styled.div<{ image: string | null }>`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background: rgb(17, 17, 17);
  background-image: url(${props => props.image});
  background-image: linear-gradient(90deg, ${styleColor.secondaryBackgroundColor} 19%, rgba(17, 17, 17, 0) 99.75%), url(${props => props.image});
  ${backgroundCover};
  color: ${styleColor.primaryFontColor};
  padding: 120px 150px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  &.show {
    padding-top: 10px;
    padding-bottom: 50px;
  }
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
  cursor: pointer;

  &:hover {
    border: 5px solid #FBFBFB;
  }
`

const Awards = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  max-width: 433px;
`

const GenresWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span:nth-child(1) {
    padding-right: 24px;
  }

  & > span:not(:first-child) {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  transition: all 0.3s ease-in-out;

  &.show {
    padding-bottom: 28%;
    margin-bottom: 30px;
  }
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Span = styled.span`
  padding-right: 48px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    right: 24px;
    height: 24px;
    color: ${styleColor.primaryFontColor};
    border: 1px solid ${styleColor.primaryFontColor};
    z-index: 1;
  }
`

export const Main = () => {
    const film = useSelector<AppRootStateType, FilmType>(state => state.film)
    const dispatch = useDispatch()

    const [showTrailer, setShowTrailer] = useState<boolean>(false)

    const onButtonHandler = () => {
        setShowTrailer(true)
    }

    //loading similar films more data
    useEffect(() => {
        if (film.title) {
            film.similars.map(f => dispatch(getSimilarFilmData({id: f.id})))
            setShowTrailer(false)
        }
    }, [dispatch, film.title, film.similars])

    return (
        <MainWrapper className={showTrailer ? 'show' : ''} image={film.posters && film.posters.backdrops[0].link}>
            <div>
                <Title>{film.title}</Title>
                <GenresWrapper>
                    <span><ImdbCard inlineProps={true} rating={film.imDbRating}/></span>
                    <Span>{film.genres}</Span>
                    <Span>{film.type}</Span>
                    <span>{film.year}</span>
                </GenresWrapper>
            </div>
            <div>
                {!showTrailer && film?.trailer?.linkEmbed && <Button onClick={onButtonHandler}>Watch</Button>}
                <Wrapper className={showTrailer ? 'show' : ''}>
                    {showTrailer &&
                    <Iframe
                        src={film?.trailer?.linkEmbed}
                        frameBorder="0"
                        allowFullScreen
                        title="Trailer"
                    />
                    }
                </Wrapper>
                <Awards>{film.awards}</Awards>
            </div>
        </MainWrapper>
    )
}