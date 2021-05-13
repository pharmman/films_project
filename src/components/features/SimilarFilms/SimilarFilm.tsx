import React, {useState} from 'react'
import styled from 'styled-components'
import {FilmType, SimilarFilmType} from '../../../api/filmAPI'
import {ImdbCard} from '../../ImdbCard/ImdbCard'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {setFilm, setFilmId} from "../FilmPage/film-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../app/main/routes/Pages";
import {Link} from "react-scroll/modules";
import {backgroundCover} from "../../../common/stylesVariables";

type SimilarFilmPropsType = {
    similarFilm: SimilarFilmType
}

const SimilarFilmWrapper = styled.div`
  min-width: 260px;
  min-height: 360px;
  margin-right: 30px;
  margin-top: 10px;
`

const SimilarFilmInner = styled.div<{ image: string }>`
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: black;
  background-image: url(${props => props.image});
  ${backgroundCover};
  border-radius: 20px;
`

const Description = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(20, 19, 19, 0.85);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20% 30px;
  color: #FFFFFF;
  border-radius: 20px;
`

const DescriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  line-height: 29px;
  text-align: left;
  margin-bottom: 8px;
  overflow-wrap: anywhere;
  cursor: pointer;
`
const GenresSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 20px;

  &.top {
    margin-bottom: 8px;
  }
`

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 23px;
  overflow-wrap: anywhere;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const SimilarFilm: React.FC<SimilarFilmPropsType> = ({similarFilm}) => {
    const dispatch = useDispatch()
    const [toggleDescription, setToggleDescription] = useState<boolean>(false)
    const film = useSelector<AppRootStateType, FilmType>(state => state.similarFilms[similarFilm.id])
    const [redirect, setRedirect] = useState<boolean>(false)

    const showDescription = () => {
        setToggleDescription(true)
    }

    const hideDescription = () => {
        setToggleDescription(false)
    }

    const chooseFilm = () => {
        dispatch(setFilmId({id: film.id}))
        dispatch(setFilm({film}))
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to={PATH.FILM}/>
    }

    return (
        <SimilarFilmWrapper>
            <SimilarFilmInner onMouseEnter={showDescription} onMouseLeave={hideDescription} image={similarFilm.image}>
                {toggleDescription &&
                <Description>
                    <Link to={'film'} spy={true} smooth={true} duration={2000}>
                        <DescriptionTitle onClick={chooseFilm}>{film.title}</DescriptionTitle>
                    </Link>
                    <GenresSpan className={'top'}>{film.type}</GenresSpan>
                    <GenresSpan>{film.genres}</GenresSpan>
                    <Paragraph>{film.plot}</Paragraph>
                    <ImdbCard rating={film.imDbRating}/>
                </Description>}
            </SimilarFilmInner>
        </SimilarFilmWrapper>
    )
}