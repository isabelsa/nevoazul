import React from 'react'

import { Label, Text } from '../../UI'
import * as S from './About.css'

const About = () => {
  return (
    <S.About>
      <S.AboutInfo>
        <Label>No próximo número</Label>
        <S.Title>
          Conversas <i>em prol</i> da humanidade.
        </S.Title>
        <Text>
          A Nevoazul explora a relação que temos com os meios de comunicação e a
          tecnologia. Fundada em 2016, a revista explora como, numa sociedade
          movida a informação, tão depressa estamos no papel de produtores, como
          no de consumidores.
        </Text>
      </S.AboutInfo>
      <S.Magazine />
    </S.About>
  )
}

export default About
