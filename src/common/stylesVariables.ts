import {css} from "styled-components";

export const styleColor = {
    primaryFontColor: '#FEFEFE',
    secondaryFontColor: '#000000',
    secondaryBackgroundColor: '#111111',
    HeaderInputBackgroundColor: '#1B1919',
    HeaderTextColor: '#5F5F5F'
}

export const backgroundCover = css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const styledHeaderFooter = css`
  min-height: 100px;
  background-color: ${styleColor.secondaryBackgroundColor};
  display: flex;
`