import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ArticleBig from './ArticleBig/ArticleBig'
import ArticleSmall from './ArticleSmall/ArticleSmall'

import * as S from './Arcticles.css'

const Articles = () => {
  const data = useStaticQuery(query)

  return (
    <S.Holder>
      <S.Flex>
        <ArticleSmall
          title="Inês Santos Silva: O Futuro tem futuro?"
          description="An array is a special type of data type which can store multiple values of different data types sequentially using a special syntax."
          tags={['Entrevista', 'Empreendedorismo']}
          link="/blog/ines-santos-silva"
          image={data.inesSantosSilva.childImageSharp.fluid}
        />
        <ArticleBig
          title="Um Smart Contract não se cansa, nem se engana"
          description="Em breve podemos viver num futuro no qual as organizações já não têm funcionários ou gestores, mas sim um conjunto de rotinas de software que determina as suas acções. Com grupos em que todos os seus intervenientes podem propor, votar, desenvolver e implementar novas medidas."
          tags={['Artigo', 'Economia']}
          link="/blog/smart-contract"
          image={data.smartContracts.childImageSharp.fluid}
        />
        <ArticleBig
          title="A comunicação de ciência chega a todos"
          description="A ciência é feita no secretismo de laboratórios e instituições académicas, mas os seus resultados pertencem à sociedade. No entanto, há um grande desafio neste transporte de informação - quando as investigações não são transmitidas de forma eficiente e adaptada, a mensagem fica comprometida."
          tags={['Artigo', 'Ciência']}
          link="/blog/science-communication"
          image={data.scienceCommunication.childImageSharp.fluid}
        />
      </S.Flex>
    </S.Holder>
  )
}

const query = graphql`
  query {
    smartContracts: file(relativePath: { regex: "/blog_smart_contracts/" }) {
      name
      url
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scienceCommunication: file(
      relativePath: { regex: "/blog_science_communication/" }
    ) {
      name
      url
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    inesSantosSilva: file(relativePath: { regex: "/blog_ines_santos_silva/" }) {
      name
      url
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Articles
