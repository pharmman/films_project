import styled from 'styled-components'
import {styleColor} from '../../../common/stylesVariables'
import searchIcon from '../../../assets/images/searchButton.svg'

const HeaderWrapper = styled.header`
  min-height: 100px;
  background-color: ${styleColor.headerBackgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const InputWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  height: 50px;

  &::before {
    content: url(${searchIcon});
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
  }
`

const HeaderInput = styled.input`
  width: 100%;
  padding: 14px 10px 14px 68px;
  border-radius: 20px;
  border: none;
  outline: transparent;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  background-color: ${styleColor.HeaderInputBackgroundColor};
  color: ${styleColor.HeaderTextColor};
`

const TextSpan = styled.span`
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  color: ${styleColor.primaryFontColor}
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <TextSpan>Richbee Shows</TextSpan>
            </div>
            <InputWrapper>
                <HeaderInput placeholder={'Type here smth...'}/>
            </InputWrapper>

        </HeaderWrapper>
    )
}