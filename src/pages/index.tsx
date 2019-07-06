import React from 'react'
import Hero from '../components/Hero/Hero'

import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO
        title={'Conversas em prol da humanidade'}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Hero />
    </>
  )
}

export default IndexPage
