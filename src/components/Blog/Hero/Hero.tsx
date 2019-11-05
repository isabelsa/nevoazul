import * as React from 'react'
import * as S from './Hero.css'

import { NavLink } from '../../UI/index'
import { graphql, useStaticQuery } from 'gatsby'

import { motion } from 'framer-motion'

const Hero = () => {
  const { blogYaml } = useStaticQuery(query)

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
      <S.HeroImage />
      <S.HeroContent>
        <S.ContentHolder
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <S.HeroCategory>Categoria</S.HeroCategory>
          <S.HeroTitle>
            The Art of Waiting <i>A. Lange & Söhne</i>
          </S.HeroTitle>
          <S.HeroDescription>{blogYaml.hero.description}</S.HeroDescription>
          <NavLink>Ler mais</NavLink>
        </S.ContentHolder>
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero

export const query = graphql`
  {
    blogYaml {
      hero {
        title
        description
        cta
      }
    }
  }
`
