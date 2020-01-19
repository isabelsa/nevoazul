import React from 'react'

import SEO from '../components/SEO/SEO'
import Resellers from '../components/Resellers/Resellers'

const ResellersPage = () => {
  return (
    <>
      <SEO
        title="testing"
        description="testing"
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <Resellers />
    </>
  )
}

export default ResellersPage
