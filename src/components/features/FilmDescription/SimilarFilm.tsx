import React, {useState} from 'react'
import styled from 'styled-components'
import {SimilarFilmType} from '../../../api/filmAPI'
import {ImdbCard} from '../../ImdbCard/ImdbCard'

type SimilarFilmPropsType = {
    film: SimilarFilmType
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

export const SimilarFilm:React.FC<SimilarFilmPropsType> = ({film}) => {
    const [toggleDescription, setToggleDescription] = useState<boolean>(false)

    const showDescription = () => {
        setToggleDescription(true)
    }

    const hideDescription = () => {
        setToggleDescription(false)
    }

    return (
        <SimilarFilmWrapper>
            <SimilarFilmInner onMouseEnter={showDescription} onMouseLeave={hideDescription} image={film.image}>
            {toggleDescription &&
            <Description>
                <DescriptionTitle>{film.title}</DescriptionTitle>
                <GenresSpan className={'top'}>Crime, Drama</GenresSpan>
                <GenresSpan>TV Series 2013</GenresSpan>
                <Paragraph>
                    A gangster family 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.
                </Paragraph>
                <ImdbCard rating={'8.8'}/>
            </Description>}
                </SimilarFilmInner>
        </SimilarFilmWrapper>
    )
}