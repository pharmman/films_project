import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppErrorType = null | string
export type appReducerInitialState = typeof initialState

const initialState = {
    loading: false,
    error: null as AppErrorType,
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
            state.loading = action.payload.loading
        },
        setAppError: (state, action: PayloadAction<{ error: AppErrorType }>) => {
            state.error = action.payload.error
        }
    }
})

export const appReducer = slice.reducer
export const {setAppLoading, setAppError} = slice.actions