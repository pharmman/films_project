import React, {useEffect} from 'react'
import './App.scss'
import {Main} from "./main/Main";
import {toast, Toaster} from "react-hot-toast";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {AppErrorType} from "./appReducer";

function App() {
    const appError = useSelector<AppRootStateType, AppErrorType>(state => state.app.error)

    useEffect(() => {
        if (appError) {
        toast.error(appError)
        }
    },[appError])

    return (
        <>
            <Main/>
            <Toaster position={'bottom-center'}/>
        </>
    )
}

export default App
