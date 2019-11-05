import React from 'react'
import { Link } from 'gatsby'

import * as S from './HeaderLink.css'

const NavLink = ({ children, to }) => {
  return (
    <S.Holder>
      <Link to={to}>
        <S.HeaderLink>{children}</S.HeaderLink>
      </Link>
    </S.Holder>
  )
}

export default NavLink
