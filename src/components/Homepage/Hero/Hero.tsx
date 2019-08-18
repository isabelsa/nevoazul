import * as React from 'react'
import * as S from './Hero.css'

import { graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
  const { homepageYaml } = useStaticQuery(query)

  return (
    <S.Hero>
      <S.Content>
        <S.Display>
          Conversas <i>em prol</i> da humanidade.
        </S.Display>
        <S.Text>{homepageYaml.hero.description}</S.Text>
      </S.Content>

      <S.CTA>
        <S.Holder>
          <S.RoundShape />
          <S.CTAText>{homepageYaml.hero.cta}</S.CTAText>
        </S.Holder>
      </S.CTA>
      <S.Anchor to="#highlight">
        <S.ArrowDown />
      </S.Anchor>
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
