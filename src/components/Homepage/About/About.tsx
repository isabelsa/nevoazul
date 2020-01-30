import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

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
  const images = useStaticQuery(query)

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
        <S.MagazineImage>
          <Img
            fluid={images.magazine.childImageSharp.fluid}
            alt="This is a picture of my face."
          />
        </S.MagazineImage>
        <CaptionWithNumber
          number="01"
          description="À conversa com João Bernardino."
        />
      </S.Magazine>
    </S.About>
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

export default About
