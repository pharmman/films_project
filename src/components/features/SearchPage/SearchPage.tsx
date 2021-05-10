import styled from 'styled-components'
import React, {useEffect} from 'react'
import {FilmCard} from './FilmCard/FilmCard'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../app/store'
import {GetFilmResponseType} from '../../../api/filmAPI'
import {getFilmData, getFilmId} from './film-reducer'
import {styleColor} from '../../../common/stylesVariables'
import backgroundImage from '../../../assets/images/background.png'

const SearchPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${styleColor.primaryFontColor};
  transform: translateY(50px);
`

const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  line-height: 78px;
  text-align: center;
  margin-bottom: 40px;
`

const SecondTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0;
  margin-bottom: 80px;
  text-align: center;
`

const Form = styled.form`
  max-width: 434px;
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 20px;
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
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 50px;
  width: 120px;
  border-radius: 0 20px 20px 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #FEFEFE;
  background: #4EA7F9;
  border: none;
  outline: transparent;
`

type Inputs = {
    title: string;
};

export const SearchPage = () => {
    const dispatch = useDispatch()
    const filmId = useSelector<AppRootStateType, string>(state => state.film.id)
    const film = useSelector<AppRootStateType, GetFilmResponseType>(state => state.film)

    const {register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(getFilmId({title: data.title}))
    }

    useEffect(() => {
        if (filmId) {
            dispatch(getFilmData({id: filmId}))
        }
    }, [filmId, dispatch])

    return (
        <SearchPageWrapper>
            <SearchPageContainer>
                <Title>Unlimited movies,<br/> TV shows, and more.</Title>
                <SecondTitle>Watch anywhere. Cancel anytime.</SecondTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('title')} defaultValue="the queen ga"/>
                    <Button type="submit">Search</Button>
                </Form>
                {film.title && <FilmCard film={film}/>}
            </SearchPageContainer>
            {/*<YoutubeBackground/>*/}
        </SearchPageWrapper>
    )
}