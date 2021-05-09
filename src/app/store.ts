import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {filmReducer} from '../components/features/SearchPage/film-reducer'

const rootReducer = combineReducers({
    film: filmReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store