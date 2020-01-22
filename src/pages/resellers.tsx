import React from 'react'

import SEO from '../components/SEO/SEO'
import Resellers from '../components/Resellers/Resellers'

import { graphql } from 'gatsby'

type Reseller = {
  reseller_image: {
    url: string
  }
  reseller_kicker: string
  reseller_name: string
  reseller_description: string
}

type ResellersPageProps = {
  data: {
    prismicResellers: {
      data: {
        resellers: Reseller[]
        reseller_where_to_find: string
        reseller_where_description: string
        reseller_inquiries: string
        reseller_inquiries_description: string
      }
    }
  }
}

const ResellersPage: React.FC<ResellersPageProps> = ({ data }) => {
  const content = data.prismicResellers.data

  return (
    <>
      <SEO
        title="Nevoazul: Revendedores"
        description="Numa sociedade movida a informação, em que tão depressa estamos no papel de produtores, como no de consumidores, a Nevoazul explora a relação que temos com os meios de comunicação e a tecnologia."
        keywords={[
          `nevoazul`,
          `revista`,
          `magazine`,
          `humanity`,
          `tehcnology`,
          `work`,
        ]}
      />
      <Resellers content={content} />
    </>
  )
}

export default ResellersPage

export const query = graphql`
  query Resellers {
    prismicResellers {
      data {
        resellers {
          reseller_image {
            alt
            copyright
            url
          }
          reseller_kicker
          reseller_name
          reseller_description
        }
        reseller_where_to_find
        reseller_where_description
        reseller_inquiries
        reseller_inquiries_description
      }
    }
  }
`
