import * as React from 'react'
import { ArrowDown } from '../UI/index'

import * as S from './Hero.css'

const Hero = () => {
  return (
    <S.Hero>
      <S.Content>
        <S.Display>Conversas em prol da humanidade</S.Display>
        <S.Text>
          A nova edição da Nevoazul está a chegar. Através de entrevistas em
          profundidade e artigos de reflexão, queremos questionar a relação que
          temos com os meios e perceber como podemos transformar informação em
          conhecimento.
        </S.Text>
      </S.Content>
      <ArrowDown />
    </S.Hero>
  )
}

export default Hero
