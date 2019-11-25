import * as React from 'react'
import Gallery from '../Gallery/Gallery'

import * as S from './Hero.css'

import { graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
  const [[page, direction], setPage] = React.useState([0, 0])
  const { aboutYaml } = useStaticQuery(query)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <S.Hero>
      <S.Title>
        Nunca na história tivemos acesso a tantos conteúdos, agora <i>depende de nós</i> usa-los em prol de um futuro
        melhor.
      </S.Title>
      <S.Flex>
        <S.Column>
          <S.Text>{aboutYaml.main.firstdescription}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text>{aboutYaml.main.seconddescription}</S.Text>
        </S.Column>
      </S.Flex>
      <Gallery paginate={paginate} direction={direction} page={page} setPage={setPage} />
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
