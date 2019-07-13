import React from 'react'
import { Title } from '../../../UI/index'
import * as S from './TitleLink.css'

const TitleLink = ({ children }) => {
  return (
    <S.Holder>
      <S.TitleLink>
        <Title>{children}</Title>
      </S.TitleLink>
    </S.Holder>
  )
}

export default TitleLink
