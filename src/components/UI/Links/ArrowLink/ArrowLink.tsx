import React from 'react'

import * as S from './ArrowLink.css'

const ArrowLink = ({ children }) => {
  return (
    <S.Holder>
      <S.ArrowLink>{children}</S.ArrowLink>
      <S.Arrow />
    </S.Holder>
  )
}

export default ArrowLink
