import styled from 'styled-components'
import React, {useEffect} from 'react'
import {FilmCard} from './FilmCard/FilmCard'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../app/store'
import {getFilmData, getFilmId} from '../FilmPage/film-reducer'
import {styleColor} from '../../../common/stylesVariables'
import {Spinner} from "../../Preloader/Preloader";
import {YoutubeBackground} from "./YoutubeBackground/YoutubeBackground";
import {FilmType} from "../../../api/filmAPI";
import {PageWrapper} from "../FilmPage/Main/FilmPage";

type Inputs = {
    title: string;
};

const SearchPageWrapper = styled(PageWrapper)`
  padding-top: 200px;
  justify-content: flex-start;
  align-items: center;
`

const SearchPageContainer = styled.div`
  max-height: 953px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${styleColor.primaryFontColor};
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  line-height: 78px;
  text-align: center;
  margin-bottom: 40px;
`

export const SecondTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0;
  margin-bottom: 80px;
  text-align: center;
`

const Form = styled.form`
  max-width: 555px;
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 20px;

  &.show {
    margin-bottom: 20px;
  }
`

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 14px 148px 14px 28px;
  border-radius: 20px;
  border: none;
  outline: transparent;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
`

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 120px;
  border-radius: 0 20px 20px 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${styleColor.primaryFontColor};
  background: #4EA7F9;
  border: none;
  outline: transparent;
  cursor: pointer;
`

export const SearchPage = () => {
    const dispatch = useDispatch()
    const appLoading = useSelector<AppRootStateType, boolean>(state => state.app.loading)

    //if not film that's before request
    const filmId = useSelector<AppRootStateType, string>(state => state.film.id)
    const film = useSelector<AppRootStateType, FilmType>(state => state.film)

    const {register, handleSubmit} = useForm<Inputs>()
    //request for film id
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(getFilmId({title: data.title}))
    }

    //when film id, can request for film data
    useEffect(() => {
        if (filmId) {
            dispatch(getFilmData({id: filmId}))
        }
    }, [filmId, dispatch])

    return (
        <SearchPageWrapper>
            {appLoading && <Spinner/>}
            <SearchPageContainer>
                <Title>Unlimited movies,<br/> TV shows, and more.</Title>
                <SecondTitle>Watch anywhere. Cancel anytime.</SecondTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('title')} placeholder={'Films, serials'}/>
                    <Button type="submit">Search</Button>
                </Form>
                {film.title && <FilmCard film={film}/>}
            </SearchPageContainer>
            <YoutubeBackground/>
        </SearchPageWrapper>
    )
}