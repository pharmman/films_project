import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {filmsReducer} from '../components/features/SearchPage/films-reducer'
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    film: filmsReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store