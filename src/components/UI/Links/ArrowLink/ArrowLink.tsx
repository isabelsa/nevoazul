import React from 'react'

import * as S from './ArrowLink.css'

type ArrowLinkProps = {
  to: string
  children: React.ReactNode
  isExternal?: boolean
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ to, children, isExternal }) => {
  if (isExternal) {
    return (
      <S.HolderA href={to}>
        <S.ArrowLink>{children}</S.ArrowLink>
        <S.Arrow />
      </S.HolderA>
    )
  }
  return (
    <S.Holder to={to}>
      <S.ArrowLink>{children}</S.ArrowLink>
      <S.Arrow />
    </S.Holder>
  )
}

export default ArrowLink
