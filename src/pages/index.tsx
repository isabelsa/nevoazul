import React from 'react'
import Hero from '@/components/Homepage/Hero/Hero'
import MagazinePlug from '@/components/Homepage/MagazinePlug/MagazinePlug'
import Highlight from '@/components/Homepage/Highlight/Highlight'
import Articles from '@/components/Homepage/Articles/Articles'
import NewsletterPlug from '@/components/Homepage/NewsletterPlug/NewsletterPlug'

import { graphql, useStaticQuery } from 'gatsby'

import SEO from '@/components/SEO/SEO'

const IndexPage = () => {
  const { homepageYaml } = useStaticQuery(query)

  return (
    <>
      <SEO
        title={homepageYaml.seo.title}
        description={homepageYaml.seo.description}
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
    homepageYaml {
      seo {
        title
        description
      }
    }
  }
`
