import * as React from 'react'
import Hero from '@/components/About/Hero/Hero'
import Conversation from '@/components/About/Conversation/Conversation'

import { graphql, useStaticQuery } from 'gatsby'

import SEO from '@/components/SEO/SEO'

const About = () => {
  const { aboutYaml } = useStaticQuery(query)
  return (
    <>
      <SEO
        title={aboutYaml.seo.title}
        description={aboutYaml.seo.description}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Hero />
      <Conversation />
    </>
  )
}

export default About

export const query = graphql`
  {
    aboutYaml {
      seo {
        title
        description
      }
    }
  }
`
