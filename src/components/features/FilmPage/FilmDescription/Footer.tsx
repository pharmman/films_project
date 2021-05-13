import styled from 'styled-components'
import {styleColor, styledHeaderFooter} from '../../../../common/stylesVariables'
import {NavLink} from "react-router-dom";

const FooterWrapper = styled.footer`
  ${styledHeaderFooter};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  color: ${styleColor.primaryFontColor};
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <Link to={'/search'}>Richbee Shows</Link>
        </FooterWrapper>
    )
}