import React from 'react'

import * as S from './HeaderLink.css'

const NavLink = ({ children }) => {
  return (
    <S.Holder>
      <S.HeaderLink>{children}</S.HeaderLink>
    </S.Holder>
  )
}

export default NavLink
