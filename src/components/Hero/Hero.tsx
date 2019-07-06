import * as React from 'react'
import { ArrowDown, Display, Text } from '../UI/index'

import * as S from './Hero.css'

const Hero = () => {
  return (
    <S.Hero>
      <S.Content>
        <Display>Conversas em prol da humanidade</Display>
        <Text>
          A nova edição da Nevoazul está a chegar. Através de entrevistas em
          profundidade e artigos de reflexão, queremos questionar a relação que
          temos com os meios e perceber como podemos transformar informação em
          conhecimento.
        </Text>
      </S.Content>
      <ArrowDown />
    </S.Hero>
  )
}

export default Hero
