import * as React from 'react'
import Gallery from '../Gallery/Gallery'

import * as S from './Hero.css'

import { graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
  const { aboutYaml } = useStaticQuery(query)

  return (
    <S.Hero>
      <S.Title>
        Nunca na história tivemos acesso a tantos conteúdos, agora{' '}
        <i>depende de nós</i> usa-los em prol de um futuro melhor.
      </S.Title>
      <S.Flex>
        <S.Text>{aboutYaml.main.firstdescription}</S.Text>
        <S.Text>{aboutYaml.main.seconddescription}</S.Text>
      </S.Flex>
      <Gallery />
    </S.Hero>
  )
}

export default Hero

export const query = graphql`
  {
    aboutYaml {
      main {
        firstdescription
        seconddescription
      }
    }
  }
`
