import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {filmAPI, GetFilmResponseType} from '../../../api/filmAPI'

export const getFilmId = createAsyncThunk('film/fetchFilmId', async (params:{title: string}, {dispatch, rejectWithValue}) => {
    try {
        const res = await filmAPI.getId(params.title)
        return {filmId: res.data.results[0].id}
    }
    catch (e) {
        return rejectWithValue(e)
    }
})

export const getFilmData = createAsyncThunk('film/fetchFilmData', async (params:{id: string}, {dispatch, rejectWithValue}) => {
    try {
        const res = await filmAPI.getFilm(params.id)
        return {film: res.data}
    }
    catch (e) {
        return rejectWithValue(e)
    }
})

const slice = createSlice({
    name: 'film',
    initialState: {} as GetFilmResponseType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFilmId.fulfilled, (state, action) => {
            return {...state, id: action.payload.filmId}
        })
            .addCase(getFilmData.fulfilled, (state, action) => {
                return {...state, ...action.payload.film}
            })
    }
})

export const filmReducer = slice.reducer
