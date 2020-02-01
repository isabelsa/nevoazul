import React from 'react'

import SEO from '../components/SEO/SEO'
import Resellers from '../components/Resellers/Resellers'

const ResellersPage: React.FC<ResellersPageProps> = () => {
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
      <Resellers />
    </>
  )
}

export default ResellersPage
