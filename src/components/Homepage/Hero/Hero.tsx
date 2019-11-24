import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import { NavLink } from '../../UI/index'

import * as S from './Hero.css'

const Hero = () => {
  const [elementTop, setElementTop] = React.useState(0)
  const ref = React.useRef(null)
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  })

  React.useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <S.Hero>
      <S.ContentHolder>
        <S.HeroTitle>
          Nº3: Conversas <i>em prol</i> da humanidade
        </S.HeroTitle>
        <S.HeroDescription>
          The Thin Line é um projeto de fotografia documental, da autoria do
          Colectivo Photo. A proposta é olhar, refletir e iniciar um diálogo
          sobre as fronteiras e o que elas representam.{' '}
        </S.HeroDescription>
        <NavLink>Ler mais</NavLink>
      </S.ContentHolder>

      <S.SmallMagazineBottom as={motion.div} ref={ref} />
      <S.SmallMagazineLeft as={motion.div} />
      <S.SmallMagazineTop as={motion.div} />
      <S.SmallMagazineRight as={motion.div} />

      <S.Line />
    </S.Hero>
  )
}

export default Hero
