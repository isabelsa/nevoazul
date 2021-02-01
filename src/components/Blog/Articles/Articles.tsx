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
        title="Entre o meio e a mensagem: A cama"
        description="O sono ultrapassa as categorias dos direitos e dos deveres, uma vez que é uma necessidade insuprimível do animal humano. No entanto, o direito a uma noite tranquila parece cada vez mais ameaçado, e o dever orgânico do sono cada vez mais negligenciado."
        tags={['Artigo']}
        link="/blog/entre-o-meio-e-a-mensagem-a-cama"
        image={data.entreoMeio.childImageSharp.fluid}
      />
      <ArticleSmall
        title="Daniel Santos: Para humanos, por humanos"
        description="O Daniel é designer de serviços no sector público. Se o nome é auto-explicativo, a concretização é um jogo de complexidades. Entusiasta da inovação centrada em pessoas, o seu trabalho mostra-nos a importância de transformar a burocracia em usabilidade."
        tags={['Entrevista']}
        link="/blog/daniel-santos"
        image={data.danielSantos.childImageSharp.fluid}
      />
        <ArticleSmall
          title="Um Smart Contract não se cansa, nem se engana"
          description="Em breve podemos viver num futuro no qual as organizações já não têm funcionários ou gestores, mas sim um conjunto de rotinas de software que determina as suas acções. Com grupos em que todos os seus intervenientes podem propor, votar, desenvolver e implementar novas medidas."
          tags={['Artigo', 'Economia']}
          link="/blog/smart-contract"
          image={data.smartContracts.childImageSharp.fluid}
        />
         <ArticleSmall
        title="A comunicação de ciência chega a todos"
        description="A ciência é feita no secretismo de laboratórios e instituições académicas, mas os seus resultados pertencem à sociedade. No entanto, há um grande desafio neste transporte de informação - quando as investigações não são transmitidas de forma eficiente e adaptada, a mensagem fica comprometida."
        tags={['Artigo', 'Ciência']}
        link="/blog/science-communication"
        image={data.scienceCommunication.childImageSharp.fluid}
      />
             <ArticleSmall
          title="Inês Santos Silva: O Futuro tem futuro?"
          description="O empreendedorismo tem estado no centro das atenções da Inês Santos Silva, diretora executiva da empresa de consultoria Aliados, mas sem o optimismo cego que muitas vezes encontramos entre os adeptos desta área. Pelo contrário, revela-se preocupada com um tema vital: o futuro do trabalho."
          tags={['Entrevista', 'Empreendedorismo']}
          link="/blog/ines-santos-silva"
          image={data.inesSantosSilva.childImageSharp.fluid}
        />
        
      </S.Flex>
    </S.Holder>
  )
}

const query = graphql`
  query {
    entreoMeio: file(relativePath: { regex: "/blog_entre_o_meio/" }) {
      name
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    danielSantos: file(relativePath: { regex: "/blog_daniel/" }) {
      name
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smartContracts: file(relativePath: { regex: "/blog_smart_contracts/" }) {
      name
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
      size
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    inesSantosSilva: file(relativePath: { regex: "/blog_ines_santos_silva/" }) {
      name
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
