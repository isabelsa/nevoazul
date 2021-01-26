import * as React from 'react'

import * as S from './Hero.css'
import { NavLink } from '../../UI/index'

import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'

const Hero = () => {
  const data = useStaticQuery(query)

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
        <S.HeroImage as={motion.div}>
          <Img fluid={data.jacquesTati.childImageSharp.fluid} alt="daçdk" />
        </S.HeroImage>
      </S.HeroHolder>
      <S.HeroContent>
        <Link to="/blog/jacques-tati">
          <S.ContentHolder
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={animationVariants}
          >
            <S.HeroCategory>Artigo, Informação</S.HeroCategory>
            <S.HeroTitle>
            Como criar uma <i>comunidade digital</i> como se fosse um jardim
            </S.HeroTitle>
            <S.HeroDescription>
              A distância até à realização dos nossos sonhos e ambições
              tecnológicas é imensa. Deslumbrados por esta fantasia de um mundo
              melhor, pelas utopias de Frank Lloyd Wright e dos seus carros
              voadores.
            </S.HeroDescription>
            <NavLink to="/blog/jacques-tati">Ler mais</NavLink>
          </S.ContentHolder>
        </Link>
      </S.HeroContent>
    </S.Hero>
  )
}

export const query = graphql`
  query {
    jacquesTati: file(relativePath: { regex: "/blog_jacques_tati/" }) {
      name
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
