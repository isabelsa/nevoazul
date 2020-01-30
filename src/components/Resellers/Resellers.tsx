import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { CaptionWithNumber, ArrowRight, Text } from '../UI'
import * as S from './Resellers.css'

const Resellers = ({}) => {
  const [reseller, setReseller] = React.useState(0)

  const data = useStaticQuery(query)
  const resellersData = data.allResellersYaml.edges[0].node.resellers
  const resellersGeneral = data.allResellersYaml.edges[0].node.resellerInfo

  return (
    <S.Wrapper>
      <S.GalleryHolder>
        <S.Gallery>
          <Img fluid={resellersData[reseller].image.childImageSharp.fluid} />
        </S.Gallery>
        <S.GalleryControls>
          <CaptionWithNumber
            number={resellersData[reseller].number}
            description={resellersData[reseller].description}
          />
          <S.Control>
            <ArrowRight
              onClick={() => setReseller((reseller + 1) % resellersData.length)}
            />
          </S.Control>
        </S.GalleryControls>
      </S.GalleryHolder>
      <S.Column>
        {resellersData.map(res => {
          return (
            <S.Resellers key={res.id} onClick={() => setReseller(res.id)}>
              <S.Kicker>{res.location}</S.Kicker>
              <S.ResellerHolder>
                <S.ResellerName isSelected={res.id === reseller}>
                  {res.name}
                </S.ResellerName>
              </S.ResellerHolder>
            </S.Resellers>
          )
        })}
      </S.Column>
      <S.Column>
        <div>
          <S.Heading>{resellersGeneral.whereTitle}</S.Heading>
          <Text>{resellersGeneral.whereDescription}</Text>
        </div>

        <div>
          <S.Heading>{resellersGeneral.inspirationTitle}</S.Heading>
          <Text>{resellersGeneral.inspirationDescription}</Text>
        </div>
      </S.Column>
    </S.Wrapper>
  )
}

const query = graphql`
  query Resellers {
    allResellersYaml {
      edges {
        node {
          resellers {
            description
            id
            link
            location
            name
            number
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          resellerInfo {
            whereTitle
            whereDescription
            inspirationTitle
            inspirationDescription
          }
        }
      }
    }
  }
`

export default Resellers
