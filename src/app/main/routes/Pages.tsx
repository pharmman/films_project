import React, {ReactNode} from 'react'
import { Redirect } from "react-router-dom";
import {SearchPage} from "../../../components/features/SearchPage/SearchPage";
import {FilmPage} from "../../../components/features/FilmPage/FilmPage";
import {Film} from "../../../components/features/Film";
import {SearchRedirect} from "../../../components/features/SearchRedirect/SearchRedirect";
import {ErrorPage} from "../../../components/features/404Page/404Page";

export type PageType = {
    _id: number;
    title: string;
    path?: string;
    params?: string;
    exact?: boolean;
    page: ReactNode;
};

export const PATH = {
    SEARCH: '/search',
    FILM: '/film',
    ERROR: '/404'
}

export const pages: PageType[] = [
    {_id: 0, title: 'main', path: '/', exact: true, page: <Redirect to={PATH.SEARCH}/>},
    {_id: 1, title: 'login', path: '/search', exact: true, page: <SearchPage/>},
    {_id: 2, title: 'film', path: '/film', exact: true, page:  <SearchRedirect><Film/></SearchRedirect> },
    {_id: 3, title: '404', path: '/404', exact: true, page: <ErrorPage/>},
    {_id: 4, title: 'error', path: '*', exact: false, page: <Redirect to={PATH.ERROR}/> },
]