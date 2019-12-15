import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import * as S from './Hero.css'

type HeroProps = {
  content: {
    hero_description: string
    hero_title: string
  }
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const topMagazine = React.useRef(null)
  const rightMagazine = React.useRef(null)
  const bottomMagazine = React.useRef(null)
  const leftMagazine = React.useRef(null)

  const [topTop, setTopTop] = React.useState(0)
  const [rightTop, setRightTop] = React.useState(0)
  const [bottomTop, setBottomTop] = React.useState(0)
  const [leftTop, setLeftTop] = React.useState(0)

  const { scrollY } = useViewportScroll()

  const top = useTransform(scrollY, [topTop, topTop + 1], [0, 0.1], {
    clamp: false,
  })
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
    const topEl = topMagazine.current
    setTopTop(topEl.offsetTop)

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
        <S.HeroTitle>
          Conversas <i>em prol</i> da humanidade
        </S.HeroTitle>
        <S.HeroDescription>{content.hero_description}</S.HeroDescription>
      </S.ContentHolder>

      <S.SmallMagazineTop
        as={motion.div}
        ref={topMagazine}
        style={{ y: top }}
      />
      <S.SmallMagazineRight
        as={motion.div}
        ref={rightMagazine}
        style={{ y: right }}
      />
      <S.SmallMagazineBottom
        as={motion.div}
        ref={bottomMagazine}
        style={{ y: bottom }}
      />
      <S.SmallMagazineLeft
        as={motion.div}
        ref={leftMagazine}
        style={{ y: left }}
      />
    </S.Hero>
  )
}

export default Hero
