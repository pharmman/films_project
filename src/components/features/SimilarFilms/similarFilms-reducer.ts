import {filmAPI, FilmType} from "../../../api/filmAPI";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppError, setAppLoading} from "../../../app/appReducer";

export type SimilarFilmsStateType = {
    [key:string] : FilmType
}

export const getSimilarFilmData = createAsyncThunk('similarFilms/getFilmData', async (params: { id: string }, {
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
    name: 'similarFilms',
    initialState: {id : {} as FilmType} as SimilarFilmsStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSimilarFilmData.fulfilled, (state, action) => {
            state[action.payload.id] = {...action.payload.film}
        })
    }
})

export const similarFilmsReducer = slice.reducer