import React from 'react'

import Logo from '@/components/Logo/Logo'
import { Cart, HeaderLink, TextSmall } from '../UI/index'
import * as S from './Header.css'

import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const { navigationYaml } = useStaticQuery(query)

  return (
    <S.Wrapper>
      <S.Content>
        <S.Link to="/">
          <Logo />
        </S.Link>
        <S.NavLinks>
          <HeaderLink to="/magazine">
            {navigationYaml.topbar.magazine}
          </HeaderLink>
          <HeaderLink to="/newsletter">
            {navigationYaml.topbar.newsletter}
          </HeaderLink>
          <HeaderLink to="/resellers">
            {navigationYaml.topbar.resellers}
          </HeaderLink>
          <HeaderLink to="/about"> {navigationYaml.topbar.about}</HeaderLink>
          <Cart />
        </S.NavLinks>
      </S.Content>
    </S.Wrapper>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

export const query = graphql`
  {
    navigationYaml {
      topbar {
        magazine
        newsletter
        resellers
        about
      }
    }
  }
`
