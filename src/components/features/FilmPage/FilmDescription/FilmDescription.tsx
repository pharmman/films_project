import {Footer} from './Footer'
import {MainDescription} from './MainDescription'
import {PageWrapper} from '../Main/FilmPage'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../app/store";
import {Spinner} from "../../../Preloader/Preloader";
import React from "react";


export const FilmDescription = () => {
    const appLoading = useSelector<AppRootStateType, boolean>(state => state.app.loading)
    return (
        <PageWrapper>
            {appLoading && <Spinner/>}
            <MainDescription/>
        <Footer/>
        </PageWrapper>
    )
}