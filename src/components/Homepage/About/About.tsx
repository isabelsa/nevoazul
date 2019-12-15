import React from 'react'

import { Label, ArrowLink } from '../../UI'
import * as S from './About.css'

type AboutProps = {
  content: {
    about_kicker: string
    about_text: string
    about_title: string
  }
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <S.About>
      <S.AboutInfo>
        <Label>{content.about_kicker}</Label>
        <S.Title>
          O <i>futuro</i> do trabalho
        </S.Title>
        <S.Text>{content.about_text}</S.Text>

        <ArrowLink to="https://nevoazul.bigcartel.com/" isExternal="true">
          Pré-venda
        </ArrowLink>
      </S.AboutInfo>
      <S.Magazine />
    </S.About>
  )
}

export default About
