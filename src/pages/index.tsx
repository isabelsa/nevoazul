import React from 'react'
import Hero from '@/components/Homepage/Hero/Hero'
import Highlight from '@/components/Homepage/Highlight/Highlight'
import Articles from '@/components/Homepage/Articles/Articles'
import NewsletterPlug from '@/components/Homepage/NewsletterPlug/NewsletterPlug'

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
      <Articles />
      <NewsletterPlug />
    </>
  )
}

export default IndexPage
