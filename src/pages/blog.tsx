import React from 'react'
import Hero from '@/components/Blog/Hero/Hero'
import MagazinePlug from '@/components/Blog/MagazinePlug/MagazinePlug'
import Highlight from '@/components/Blog/Highlight/Highlight'
import Articles from '@/components/Blog/Articles/Articles'
import NewsletterPlug from '@/components/Blog/NewsletterPlug/NewsletterPlug'

import { graphql, useStaticQuery } from 'gatsby'

import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  const { blogYaml } = useStaticQuery(query)

  return (
    <>
      <SEO
        title={blogYaml.seo.title}
        description={blogYaml.seo.description}
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <Hero />
      <MagazinePlug />
      <Highlight />
      <Articles />
      <NewsletterPlug />
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    blogYaml {
      seo {
        title
        description
      }
    }
  }
`
