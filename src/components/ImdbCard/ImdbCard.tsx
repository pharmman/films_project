import React from 'react'
import styled from 'styled-components'

type ImdbCardPropsType = {
    rating: string
}

export const IMDBCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 30px;
  background-color: #FAC539;
  border-radius: 8px;
  color: #000000;
`

export const IMDBTitle = styled.h4`
  font-weight: 900;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  padding: 7px 12px;
`


export const ImdbCard: React.FC<ImdbCardPropsType> = ({rating}) => {
    return (
        <IMDBCardWrapper>
            <IMDBTitle>IMDB {rating}</IMDBTitle>
        </IMDBCardWrapper>
    )
}