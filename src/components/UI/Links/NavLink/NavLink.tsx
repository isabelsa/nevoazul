import React from 'react'

import * as S from './NavLink.css'

const NavLink = ({ children }) => {
  return (
    <S.Holder>
      <S.NavLink>{children}</S.NavLink>
    </S.Holder>
  )
}

export default NavLink
