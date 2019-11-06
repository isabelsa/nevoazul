import * as React from 'react'
import { TextSmall } from '../UI/index'

import * as S from './Banner.css'

import { graphql, useStaticQuery } from 'gatsby'

import { motion, AnimatePresence } from 'framer-motion'

const Banner = () => {
  const [isBannerOpen, setBanner] = React.useState(true)
  const { navigationYaml } = useStaticQuery(query)

  return (
    <AnimatePresence>
      <S.BannerHolder>
        <S.Banner
          isBannerOpen={isBannerOpen}
          key="banner"
          as={motion.div}
          initial={{ opacity: 0.75, y: -1 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <TextSmall>{navigationYaml.banner.title}</TextSmall>
          <S.Close onClick={() => setBanner(!isBannerOpen)} />
        </S.Banner>
      </S.BannerHolder>
    </AnimatePresence>
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
