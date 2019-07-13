import React from 'react'

import Logo from '@/components/Logo/Logo'
import { TextSmall } from '../UI/index'
import * as S from './Header.css'

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <S.Wrapper>
    <S.Content>
      <S.Link to="/">
        <Logo />
      </S.Link>
      <S.NavLinks>
        <TextSmall>Numeros</TextSmall>
        <TextSmall>Telegrama</TextSmall>
        <TextSmall>Revender</TextSmall>
        <TextSmall>Sobre nos</TextSmall>
        <TextSmall>0</TextSmall>
      </S.NavLinks>
    </S.Content>
  </S.Wrapper>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
