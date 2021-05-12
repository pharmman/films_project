import React from 'react'
import './App.scss'
import {SearchPage} from '../components/features/SearchPage/SearchPage'
import {FilmPage} from '../components/features/FilmPage/FilmPage'

function App() {
    return (
        <>
            <SearchPage/>
            <FilmPage/>
        </>
    )
}

export default App
