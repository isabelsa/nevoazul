import React from 'react'

import Logo from '@/components/Logo/Logo'
import * as S from './Header.css'

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <S.Wrapper>
    <S.Content>
      <S.Link to="/">
        <Logo />
      </S.Link>
      <S.NavLinks>
        <p>Numeros</p>
        <p>Telegrama</p>
        <p>Revender</p>
        <p>Sobre nos</p>
        <p>0</p>
      </S.NavLinks>
    </S.Content>
  </S.Wrapper>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
