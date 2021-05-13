import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {filmAPI, FilmType} from '../../../api/filmAPI'
import {setAppError, setAppLoading} from "../../../app/appReducer";


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
        return {film: res.data}
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
    initialState: {} as FilmType,
    reducers: {
        setFilmId: ((state, action: PayloadAction<{ id: string }>) => {
            state.id = action.payload.id
        }),
        setFilm: ((state, action:PayloadAction<{film:FilmType}>) => {
            return {...state, ...action.payload.film}
})
    },
    extraReducers: builder => {
        builder.addCase(getFilmId.fulfilled, (state, action) => {
            return {...state, id: action.payload.filmId}
        })
            .addCase(getFilmData.fulfilled, (state, action) => {
                return {...state, ...action.payload.film}
            })
    }
})

export const {setFilmId, setFilm} = slice.actions
export const filmReducer = slice.reducer
