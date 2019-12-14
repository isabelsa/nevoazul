import React from 'react'

import { Label, Text } from '../../UI'
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
          Conversas <i>em prol</i> da humanidade.
        </S.Title>
        <Text>{content.about_text}</Text>
      </S.AboutInfo>
      <S.Magazine />
    </S.About>
  )
}

export default About
