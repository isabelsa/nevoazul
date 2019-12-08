import React from 'react'

import Hero from '@/components/Homepage/Hero/Hero'
import About from '@/components/Homepage/About/About'
import Articles from '@/components/Homepage/Articles/Articles'
import Newsletter from '@/components/Newsletter/Newsletter'
import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Conversas em prol da humanidade"
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <Hero />
      <About />
      <Articles />
      <Newsletter />
    </>
  )
}

export default IndexPage
