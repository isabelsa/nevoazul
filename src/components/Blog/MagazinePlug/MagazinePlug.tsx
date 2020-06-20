import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { ArrowLink } from '../../UI/index'

import * as S from './MagazinePlug.css'
import { ROUTES } from '../../../constants/routes'

const MagazineOrderNext = () => {
  const images = useStaticQuery(query)

  return (
    <S.MagazinePlug>
      <S.Content>
        <S.ContentHighlight>Na edição 3 da Nevoazul</S.ContentHighlight>
        <S.ContentTitle>
          Conversas <i>em prol</i> da humanidade.
        </S.ContentTitle>
        <S.ContentTextMobile>
          Através de entrevistas em profundidade e artigos de reflexão, queremos
          questionar a relação que temos com os meios e perceber como podemos
          transformar informação em conhecimento.
        </S.ContentTextMobile>

        <ArrowLink to={ROUTES.root}>Comprar a revista</ArrowLink>
      </S.Content>

      <S.ContentDescription>
        <S.ContentText>
          Através de entrevistas em profundidade e artigos de reflexão, queremos
          questionar a relação que temos com os meios e perceber como podemos
          transformar informação em conhecimento.
        </S.ContentText>
      </S.ContentDescription>

      <S.ContentImage>
        <Img
          fluid={images.magazine.childImageSharp.fluid}
          alt="This is a picture of my face."
        />
      </S.ContentImage>
    </S.MagazinePlug>
  )
}

export const query = graphql`
  query {
    magazine: file(relativePath: { regex: "/homepage_about_magazine/" }) {
      name
      url
      size
      childImageSharp {
        fluid(maxWidth: 700, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default MagazineOrderNext
