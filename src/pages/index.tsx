import React from 'react'
import Hero from '../components/Hero/Hero'
import Highlight from '../components/Highlight/Highlight'

import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO
        title={'Conversas em prol da humanidade'}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Hero />
      <Highlight />
    </>
  )
}

export default IndexPage
