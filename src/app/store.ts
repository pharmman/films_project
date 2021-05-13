import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {filmReducer} from '../components/features/FilmPage/film-reducer'
import {appReducer} from "./appReducer";
import {similarFilmsReducer} from "../components/features/SimilarFilms/similarFilms-reducer";

const rootReducer = combineReducers({
    film: filmReducer,
    app: appReducer,
    similarFilms: similarFilmsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof store.getState>