import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {Redirect} from "react-router-dom";
import {PATH} from "../../app/main/routes/Pages";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type LoginRedirectPagePropsType = DivPropsType & {}

export const SearchRedirect:React.FC<LoginRedirectPagePropsType> = ({children, ...restProps}) => {
    const film = useSelector<AppRootStateType, string>(state => state.film.type)

    if (!film) {
        return <Redirect to={PATH.SEARCH}/>
    }

    return (
        <div {...restProps}>
            {children}
        </div>
    )


}