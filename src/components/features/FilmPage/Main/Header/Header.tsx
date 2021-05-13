import styled from 'styled-components'
import {styleColor, styledHeaderFooter} from '../../../../../common/stylesVariables'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {HeaderInput} from "./HeaderInput";

export const HeaderWrapper = styled.header`
  ${styledHeaderFooter};
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  color: ${styleColor.primaryFontColor}
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <Link to={'/search'}>Richbee Shows</Link>
            </div>
            <HeaderInput/>
        </HeaderWrapper>
    )
}