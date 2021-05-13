import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import styled from "styled-components";
import searchIcon from "../../../../assets/images/searchButton.svg";
import {styleColor} from "../../../../common/stylesVariables";
import {useDispatch, useSelector} from "react-redux";
import {useDebounce} from "../../../../common/useDebounce";
import {getFilmData, getFilmId} from "../../SearchPage/films-reducer";
import {AppRootStateType} from "../../../../app/store";
import {GetFilmResponseType} from "../../../../api/filmAPI";
import {FilmCard} from "../../FilmCard/FilmCard";

const InputWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  height: 50px;

  &::before {
    content: url(${searchIcon});
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 14px 10px 14px 68px;
  border-radius: 20px;
  border: none;
  outline: transparent;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  background-color: ${styleColor.HeaderInputBackgroundColor};
  color: ${styleColor.HeaderTextColor};
`


export const HeaderInput = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const [isSearching, setIsSearching] = useState(false)
    const film = useSelector<AppRootStateType, GetFilmResponseType>(state => state.film)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const debouncedSearchTerm = useDebounce(value, 1000)

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(getFilmId({title: debouncedSearchTerm}))
            setIsSearching(true)
        }
    },[dispatch, debouncedSearchTerm])

    useEffect(() => {
        if (film) {
            dispatch(getFilmData({id: film.id}))
        }
    },[dispatch, film])

    return (
        <InputWrapper>
            <Input value={value} onChange={onChangeHandler} placeholder={'Type here smth...'}/>
            {isSearching && <FilmCard film={film}/>}
        </InputWrapper>
    )
}