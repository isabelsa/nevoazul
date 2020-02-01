import React from 'react'
import Hero from '@/components/Blog/Hero/Hero'
import MagazinePlug from '@/components/Blog/MagazinePlug/MagazinePlug'
import Articles from '@/components/Blog/Articles/Articles'

import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="A blog"
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <Hero />
      <MagazinePlug />
      <Articles />
    </>
  )
}

export default IndexPage
