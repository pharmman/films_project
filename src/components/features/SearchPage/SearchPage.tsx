import styled from 'styled-components'
import styles from './SearchPage.module.scss'
import React, {useEffect} from 'react'
import {FilmCard} from './FilmCard/FilmCard'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../app/store'
import {GetFilmResponseType} from '../../../api/filmAPI'
import YouTube, {Options} from 'react-youtube'

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

export const IMDBTitle = styled(Title)`
  font-size: 12px;
  line-height: 14px;
  padding: 7px 12px;
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
        // dispatch(getFilmId({title: data.title}))
    }

    useEffect(() => {
        if (filmId) {
            // dispatch(getFilmData({id: filmId}))
        }
    }, [filmId, dispatch])

    const videoOptions:Options = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            loop:1,
            mute: 1
        }
    };

    const _onEnd = (event:{ target: any; data: number; }) =>  {
        event.target.playVideo();
    }



    return (
            <div className={styles.searchPage}>
                <div className={styles.container}>
                    <Title>Unlimited movies,<br/> TV shows, and more.</Title>
                    <SecondTitle className={styles.secondTitle}>Watch anywhere. Cancel anytime.</SecondTitle>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register('title')} defaultValue="the queen ga"/>
                        <Button type="submit">Search</Button>
                    </Form>
                    {film.title && <FilmCard film={film}/>}
                </div>
                <div className={styles.videoBackground}>
                    <div className={styles.videoForeground}>
                        <YouTube
                            videoId="gA0nQyDZR4A"
                            opts={videoOptions}
                            className={styles.videoIframe}
                            onEnd={_onEnd}
                        />
                    </div>
                </div>
            </div>
    )
}