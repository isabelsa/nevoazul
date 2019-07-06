import React from 'react'

import Logo from '@/components/Logo/Logo'
import { Wrapper, Content, Link } from './Header.css'

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo />
        <p>Numeros</p>
        <p>Telegrama</p>
        <p>Revender</p>
        <p>Sobre nos</p>
        <p>0</p>
      </Link>
    </Content>
  </Wrapper>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
