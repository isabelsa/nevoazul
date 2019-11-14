import * as React from 'react'
import * as S from './Hero.css'

import { NavLink } from '../../UI/index'

import { motion, useViewportScroll, useTransform } from 'framer-motion'

import hero from '../../../assets/images/playtime.png'

const Hero = () => {
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

  const { scrollYProgress } = useViewportScroll()

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7])

  return (
    <S.Hero as={motion.div} initial="hidden" animate="visible" variants={backgroundVariants}>
      <S.HeroHolder>
        <S.HeroImage as={motion.div} src={hero} style={{ scale }} />
      </S.HeroHolder>
      <S.HeroContent>
        <S.ContentHolder as={motion.div} initial="hidden" animate="visible" variants={animationVariants}>
          <S.HeroCategory>Artigo, Trabalho</S.HeroCategory>
          <S.HeroTitle>
            Peculiaridades <i>da vida moderna</i>: Com Jacques Tati.
          </S.HeroTitle>
          <S.HeroDescription>
            A distância até à realização dos nossos sonhos e ambições tecnológicas é imensa. Deslumbrados por esta
            fantasia de um mundo melhor, pelas utopias de Frank Lloyd Wright e dos seus carros voadores.
          </S.HeroDescription>
          <NavLink to="/blog/daniel-santos">Ler mais</NavLink>
        </S.ContentHolder>
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero
