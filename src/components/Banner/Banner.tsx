import * as React from 'react'
import { TextSmall } from '../UI/index'

import * as S from './Banner.css'

import { graphql, useStaticQuery } from 'gatsby'

const Banner = () => {
  const [showBanner, setBanner] = React.useState(true)

  const { navigationYaml } = useStaticQuery(query)

  return (
    <S.Banner show={showBanner}>
      <TextSmall>{navigationYaml.banner.title}</TextSmall>
      <S.Close onClick={() => setBanner(!showBanner)} />
    </S.Banner>
  )
}

export default Banner

export const query = graphql`
  {
    navigationYaml {
      banner {
        title
      }
    }
  }
`
