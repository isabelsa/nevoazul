import * as React from 'react'
import * as S from './Hero.css'

const Hero = () => {
  return (
    <S.Hero>
      <S.Content>
        <S.Display>
          Conversas <i>em prol</i> da humanidade
        </S.Display>
        <S.Text>
          A nova edição da Nevoazul está a chegar. Através de entrevistas em
          profundidade e artigos de reflexão, queremos questionar a relação que
          temos com os meios e perceber como podemos transformar informação em
          conhecimento.
        </S.Text>
      </S.Content>

      <S.CTA>
        <S.Holder>
          <S.RoundShape />
          <S.CTAText>Próxima edição</S.CTAText>
        </S.Holder>
      </S.CTA>
      <S.Anchor to="#highlight">
        <S.ArrowDown />
      </S.Anchor>
    </S.Hero>
  )
}

export default Hero
