import styled from 'styled-components'
import {styleColor} from '../../../common/stylesVariables'
import {NavLink} from "react-router-dom";

const FooterWrapper = styled.footer`
  min-height: 100px;
  background-color: ${styleColor.headerBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  color: #FEFEFE;
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <Link to={'/search'}>Richbee Shows</Link>
        </FooterWrapper>
    )
}