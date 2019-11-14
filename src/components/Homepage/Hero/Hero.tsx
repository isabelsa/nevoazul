import React from 'react'

import * as S from './Hero.css'

const Hero = () => {
  return (
    <S.Hero>
      <S.ContentHolder>
        <S.HeroTitle>Nevoazul Nº3</S.HeroTitle>
        <S.HeroDescription>
          The Thin Line é um projeto de fotografia documental, da autoria do Colectivo Photo. A proposta é olhar,
          refletir e iniciar um diálogo sobre as fronteiras e o que elas representam.{' '}
        </S.HeroDescription>
      </S.ContentHolder>
      <S.Magazine />
    </S.Hero>
  )
}

export default Hero
