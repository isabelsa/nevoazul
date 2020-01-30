import React from 'react'

import * as S from './HeaderLink.css'

type NavLinkProps = {
  children: React.ReactNode
  to: string
  mobile?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  mobile,
  children,
  to,
  ...props
}) => {
  return (
    <S.Holder>
      <S.HeaderLink mobile={mobile} to={to} activeClassName="active" {...props}>
        {children}
      </S.HeaderLink>
    </S.Holder>
  )
}

export default NavLink
