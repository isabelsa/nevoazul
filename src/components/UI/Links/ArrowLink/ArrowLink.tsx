import React from 'react'

import * as S from './ArrowLink.css'

type ArrowLinkProps = {
  to: string
  children: React.ReactNode
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ to, children }) => {
  return (
    <S.Holder to={to}>
      <S.ArrowLink>{children}</S.ArrowLink>
      <S.Arrow />
    </S.Holder>
  )
}

export default ArrowLink
