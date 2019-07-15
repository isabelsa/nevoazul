import React from 'react'

import Logo from '@/components/Logo/Logo'
import { Cart, HeaderLink, TextSmall } from '../UI/index'
import * as S from './Header.css'

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <S.Wrapper>
    <S.Content>
      <S.Link to="/">
        <Logo />
      </S.Link>
      <S.NavLinks>
        <HeaderLink>Numeros</HeaderLink>
        <HeaderLink>Telegrama</HeaderLink>
        <HeaderLink>Revender</HeaderLink>
        <HeaderLink>Sobre nos</HeaderLink>
        <Cart />
      </S.NavLinks>
    </S.Content>
  </S.Wrapper>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
