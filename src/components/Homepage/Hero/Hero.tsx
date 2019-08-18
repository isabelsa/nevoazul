import * as React from 'react'
import * as S from './Hero.css'

import { NavLink } from '../../UI/index'
import { graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
  const { homepageYaml } = useStaticQuery(query)

  return (
    <S.Hero>
      <S.HeroImage />
      <S.HeroContent>
        <S.ContentHolder>
          <S.HeroCategory>Categoria</S.HeroCategory>
          <S.HeroTitle>{homepageYaml.hero.title}</S.HeroTitle>
          <S.HeroDescription>{homepageYaml.hero.description}</S.HeroDescription>
          <NavLink>Ler mais</NavLink>
        </S.ContentHolder>
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero

export const query = graphql`
  {
    homepageYaml {
      hero {
        title
        description
        cta
      }
    }
  }
`
