import React from 'react'

import * as S from './NavLink.css'

type NavLinkProps = {
  to: string
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <S.Holder>
      <S.NavLink to={to}>{children}</S.NavLink>
    </S.Holder>
  )
}

export default NavLink
