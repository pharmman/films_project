import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {filmAPI, FilmType} from '../../../api/filmAPI'
import {setAppError, setAppLoading} from "../../../app/appReducer";

export interface FilmDomainType extends FilmType {
    filmIdReceived: boolean
}

export type FilmsStateType = {
    [key:string]: FilmDomainType
}

export const getFilmId = createAsyncThunk('film/fetchFilmId', async (params: { title: string }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppLoading({loading: true}))
    dispatch(setAppError({error: null}))
    try {
        const res = await filmAPI.getId(params.title)
        return {filmId: res.data.results[0].id}
    } catch (e) {
        if (e.message === "Cannot read property 'id' of undefined") {
            dispatch(setAppError({error: 'Sorry, no results were found for your search ...'}))
        } else {
            dispatch(setAppError({error: 'An unexpected error has occurred. Please try again later or contact developer developer'}))
        }
        console.log(e?.message)
        return rejectWithValue(e)
    } finally {
        dispatch(setAppLoading({loading: false}))
    }
})

export const getFilmData = createAsyncThunk('film/fetchFilmData', async (params: { id: string }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setAppLoading({loading: true}))
    dispatch(setAppError({error: null}))
    try {
        const res = await filmAPI.getFilm(params.id)
        return {film: res.data, id: params.id}
    } catch (e) {
        dispatch(setAppError({error: e.message || 'Some error occurred'}))
        console.log(e?.message)
        return rejectWithValue(e)
    } finally {
        dispatch(setAppLoading({loading: false}))
    }
})

const slice = createSlice({
    name: 'film',
    initialState: {id: {filmIdReceived: false}},
    reducers: {},
    extraReducers: builder => {
        // builder.addCase(getFilmId.fulfilled, (state, action) => {
        //     return []
        // })
        //     .addCase(getFilmData.fulfilled, (state, action) => {
        //         return {...state, ...action.payload.film}
        //     })
        builder.addCase(getFilmId.fulfilled, (state, action) => {
            state[action.payload.filmId] = {} as FilmsStateType
        })
            .addCase(getFilmData.fulfilled, (state, action) => {
                state[action.payload.id] = action.payload.film
            })
    }
})

export const filmsReducer = slice.reducer
