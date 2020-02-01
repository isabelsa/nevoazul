import React from 'react'
import { Body } from '../../index'
import * as S from './FooterLinkStyle.css'

type FooterLinkProps = {
  to: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  const external = /^http/.test(to)

  if (external) {
    return (
      <a href={to}>
        <Body>{children}</Body>
      </a>
    )
  }

  return (
    <S.FooterLink to={to}>
      <Body>{children}</Body>
    </S.FooterLink>
  )
}

export default FooterLink
