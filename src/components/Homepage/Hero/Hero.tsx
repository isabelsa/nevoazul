import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import * as S from './Hero.css'

type HeroProps = {
  content: {
    hero_description: string
    hero_title: string
  }
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const images = useStaticQuery(query)

  const rightMagazine = React.useRef(null)
  const bottomMagazine = React.useRef(null)
  const leftMagazine = React.useRef(null)

  const [rightTop, setRightTop] = React.useState(0)
  const [bottomTop, setBottomTop] = React.useState(0)
  const [leftTop, setLeftTop] = React.useState(0)

  const { scrollY } = useViewportScroll()

  const right = useTransform(scrollY, [rightTop, rightTop + 1], [0, 0.1], {
    clamp: false,
  })
  const bottom = useTransform(scrollY, [bottomTop, bottomTop + 1], [0, 0.1], {
    clamp: false,
  })
  const left = useTransform(scrollY, [leftTop, leftTop + 1], [0, 0.3], {
    clamp: false,
  })

  React.useLayoutEffect(() => {
    const rightEl = rightMagazine.current
    setRightTop(rightEl.offsetTop)

    const bottomEl = bottomMagazine.current
    setBottomTop(bottomEl.offsetTop)

    const leftEl = leftMagazine.current
    setLeftTop(leftEl.offsetTop)
  }, [])

  const animationVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: -10 },
  }

  const backgroundVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0 },
  }

  return (
    <S.Hero
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
    >
      <S.ContentHolder
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        <S.HeroKicker>Edição nº3</S.HeroKicker>
        <S.HeroTitle>
          Revista <i>Nevoazul</i>
        </S.HeroTitle>
        <S.HeroDescription>{content.hero_description}</S.HeroDescription>
      </S.ContentHolder>

      <S.SmallMagazineRight
        as={motion.div}
        ref={rightMagazine}
        style={{ y: right }}
      >
        <Img
          fluid={images.magazineRight.childImageSharp.fluid}
          loading="eager"
          alt="This is a picture of my face."
        />
      </S.SmallMagazineRight>
      <S.SmallMagazineBottom
        as={motion.div}
        ref={bottomMagazine}
        style={{ y: bottom }}
      >
        <Img
          fluid={images.magazineBottom.childImageSharp.fluid}
          loading="eager"
          alt="This is a picture of my face."
        />
      </S.SmallMagazineBottom>
      <S.SmallMagazineLeft
        as={motion.div}
        ref={leftMagazine}
        style={{ y: left }}
      >
        <Img
          fluid={images.magazineLeft.childImageSharp.fluid}
          loading="eager"
          alt="This is a picture of my face."
        />
      </S.SmallMagazineLeft>
    </S.Hero>
  )
}

export const query = graphql`
  query {
    magazineLeft: file(
      relativePath: { regex: "/homepage_hero_magazine_left/" }
    ) {
      name
      size
      childImageSharp {
        fluid(maxWidth: 700, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    magazineBottom: file(
      relativePath: { regex: "/homepage_hero_magazine_bottom/" }
    ) {
      name
      size
      childImageSharp {
        fluid(maxWidth: 400, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    magazineRight: file(
      relativePath: { regex: "/homepage_hero_magazine_right/" }
    ) {
      name
      size
      childImageSharp {
        fluid(maxWidth: 400, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
