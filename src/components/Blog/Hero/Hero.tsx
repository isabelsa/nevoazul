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
            <S.HeroCategory>Artigo</S.HeroCategory>
            <S.HeroTitle>
            Como encontrar <i>conhecimento</i>, quando tudo é informação?
            </S.HeroTitle>
            <S.HeroDescription>
            A era da informação trouxe consigo a ideia de que o progresso de uma sociedade se faz pela quantidade de informação que é criada e consumida, mas será possível continuar a expandir o cérebro, sem o sobrecarregar?
            </S.HeroDescription>
            <NavLink to="/blog/como-procurar">Ler mais</NavLink>
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
