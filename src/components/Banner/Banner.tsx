import * as React from 'react'
import { TextSmall } from '../UI/index'

import * as S from './Banner.css'

const Banner = () => {
  const [showBanner, setBanner] = React.useState(true)

  return (
    <S.Banner show={showBanner}>
      <TextSmall>Subscreve à nossa newsletter</TextSmall>
      <S.Close onClick={() => setBanner(!showBanner)} />
    </S.Banner>
  )
}

export default Banner
