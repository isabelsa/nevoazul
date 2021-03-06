import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import Logo from '@/components/Logo/Logo'
import { HeaderLink, Hamburger, Cart } from '../UI'

import { ROUTES } from '../../constants/routes'

import * as S from './Header.css'

const Header = () => {
  const [elTop, setelTop] = React.useState(0)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  const navigation = React.useRef(null)

  const { navigationYaml } = useStaticQuery(query)
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [elTop, elTop + 1], [0, -0.3], {
    clamp: false,
  })

  React.useLayoutEffect(() => {
    const elTop = navigation.current
    setelTop(elTop.offsetTop)
  }, [elTop.offsetTop])

  return (
    <React.Fragment>
      <S.Wrapper as={motion.div} ref={navigation} style={{ y }}>
        <S.DesktopNavLinks>
          <HeaderLink to={ROUTES.blog}>Artigos</HeaderLink>
        </S.DesktopNavLinks>
        <S.ContentLogo>
          <S.Link to="/" onClick={() => setIsMobileOpen(false)}>
            <Logo />
          </S.Link>
        </S.ContentLogo>
        <S.DesktopNavLinks style={{ justifyContent: 'flex-end' }}>
          <HeaderLink to={ROUTES.resellers}>
            {navigationYaml.topbar.resellers}
          </HeaderLink>
          <HeaderLink to={ROUTES.about}>
            {' '}
            {navigationYaml.topbar.about}
          </HeaderLink>
          <a href="https://nevoazul.bigcartel.com">
            <Cart />
          </a>
        </S.DesktopNavLinks>
        <S.Hamburger>
          <S.IconHolder onClick={() => setIsMobileOpen(true)}>
            <Hamburger />
          </S.IconHolder>

          <a href="https://nevoazul.bigcartel.com">
            <Cart />
          </a>
        </S.Hamburger>
      </S.Wrapper>

      <div>
        {isMobileOpen && (
          <S.MobileNavLinks>
            <HeaderLink
              mobile
              to={ROUTES.blog}
              onClick={() => setIsMobileOpen(false)}
            >
              {navigationYaml.topbar.articles}
            </HeaderLink>
            <HeaderLink
              mobile
              to={ROUTES.resellers}
              onClick={() => setIsMobileOpen(false)}
            >
              {navigationYaml.topbar.resellers}
            </HeaderLink>
            <HeaderLink
              mobile
              to={ROUTES.about}
              onClick={() => setIsMobileOpen(false)}
            >
              {navigationYaml.topbar.about}
            </HeaderLink>
          </S.MobileNavLinks>
        )}
      </div>
    </React.Fragment>
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
        articles
        resellers
        about
      }
    }
  }
`
