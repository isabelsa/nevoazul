import React from 'react'
import Hero from '@/components/Blog/Hero/Hero'
import MagazinePlug from '@/components/Blog/MagazinePlug/MagazinePlug'
import Articles from '@/components/Blog/Articles/Articles'
import NewsletterPlug from '@/components/Blog/NewsletterPlug/NewsletterPlug'

import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO title="Blog" description="A blog" keywords={[`nevoazul`, `revista`, `minimalismo`]} />
      <Hero />
      <MagazinePlug />
      <Articles />
      <NewsletterPlug />
    </>
  )
}

export default IndexPage
