import * as React from 'react'
import * as S from './Hero.css'

import { NavLink } from '../../UI/index'

import { motion } from 'framer-motion'

import hero from '../../../assets/images/playtime.jpg'

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

  return (
    <S.Hero
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
    >
      <S.HeroHolder>
        <S.HeroImage as={motion.div} src={hero} />
      </S.HeroHolder>
      <S.HeroContent>
        <S.ContentHolder
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <S.HeroCategory>Design</S.HeroCategory>
          <S.HeroTitle>
            Peculiaridades <i>da vida moderna</i>: Com <i>Jacques Tati</i>.
          </S.HeroTitle>
          <S.HeroDescription>
            A distância até à realização dos nossos sonhos e ambições
            tecnológicas é imensa. Deslumbrados por esta fantasia de um mundo
            melhor, pelas utopias de Frank Lloyd Wright e dos seus carros
            voadores.
          </S.HeroDescription>
          <NavLink to="/blog/daniel-santos">Ler mais</NavLink>
        </S.ContentHolder>
        <S.Arrow />
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero
