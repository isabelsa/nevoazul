import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'

import Logo from '@/components/Logo/Logo'
import { default as CartComponent } from '@/components/Cart/Cart'
import { Cart, HeaderLink, Modal, Hamburger } from '../UI'

import { ROUTES } from '../../constants/routes'

import * as S from './Header.css'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  const { navigationYaml } = useStaticQuery(query)

  console.log(isMobileOpen)
  return (
    <React.Fragment>
      <S.Wrapper as={motion.div}>
        <S.DesktopNavLinks>
          <HeaderLink to={ROUTES.magazine}>
            {navigationYaml.topbar.magazine}
          </HeaderLink>
          <HeaderLink to={ROUTES.blog}>
            {navigationYaml.topbar.articles}
          </HeaderLink>
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
          <Cart onClick={() => setIsModalOpen(!isModalOpen)} />
        </S.DesktopNavLinks>

        <S.Hamburger
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ cursor: 'pointer' }}
        >
          <Hamburger />
        </S.Hamburger>
      </S.Wrapper>

      <div>
        {isMobileOpen && (
          <S.MobileNavLinks>
            <HeaderLink
              to={ROUTES.magazine}
              onClick={() => setIsMobileOpen(false)}
            >
              {navigationYaml.topbar.magazine}
            </HeaderLink>
            <HeaderLink to={ROUTES.blog} onClick={() => setIsMobileOpen(false)}>
              {navigationYaml.topbar.articles}
            </HeaderLink>
            <HeaderLink
              to={ROUTES.resellers}
              onClick={() => setIsMobileOpen(false)}
            >
              {navigationYaml.topbar.resellers}
            </HeaderLink>
            <HeaderLink
              to={ROUTES.about}
              onClick={() => setIsMobileOpen(false)}
            >
              {navigationYaml.topbar.about}
            </HeaderLink>
          </S.MobileNavLinks>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        position="top"
      >
        <CartComponent />
      </Modal>
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
