import React from 'react'

import { ArrowLink, Kicker, CaptionWithNumber } from '../../UI'
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
        <Kicker>{content.about_kicker}</Kicker>
        <S.Title>
          O <i>futuro</i> do trabalho
        </S.Title>
        <S.Text>{content.about_text}</S.Text>

        <ArrowLink to="https://nevoazul.bigcartel.com/" isExternal="true">
          Comprar
        </ArrowLink>
      </S.AboutInfo>
      <S.Magazine>
        <S.MagazineImage />
        <CaptionWithNumber number="01" description="Test" />
      </S.Magazine>
    </S.About>
  )
}

export default About
