import React from 'react'

import * as S from './HeaderLink.css'

type NavLinkProps = {
  children: React.ReactNode
  to: string
}

const NavLink: React.FC<NavLinkProps> = ({ children, to, ...props }) => {
  return (
    <S.Holder>
      <S.HeaderLink to={to} activeClassName="active" {...props}>
        {children}
      </S.HeaderLink>
    </S.Holder>
  )
}

export default NavLink
