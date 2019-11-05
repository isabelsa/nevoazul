import React from 'react'

import Logo from '@/components/Logo/Logo'
import { default as CartComponent } from '@/components/Cart/Cart'
import { Cart, HeaderLink, Modal } from '../UI'

import { ROUTES } from '../../constants/routes'

import * as S from './Header.css'

import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const { navigationYaml } = useStaticQuery(query)

  return (
    <React.Fragment>
      <S.Wrapper>
        <S.Content>
          <S.NavLinks>
            <HeaderLink to={ROUTES.magazine}>
              {navigationYaml.topbar.magazine}
            </HeaderLink>
            <HeaderLink to={ROUTES.blog}>
              {navigationYaml.topbar.articles}
            </HeaderLink>
          </S.NavLinks>
          <S.Link to="/">
            <Logo />
          </S.Link>
          <S.NavLinks>
            <HeaderLink to={ROUTES.resellers}>
              {navigationYaml.topbar.resellers}
            </HeaderLink>
            <HeaderLink to={ROUTES.about}>
              {' '}
              {navigationYaml.topbar.about}
            </HeaderLink>
            <Cart onClick={() => setIsModalOpen(!isModalOpen)} />
          </S.NavLinks>
        </S.Content>
      </S.Wrapper>

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
