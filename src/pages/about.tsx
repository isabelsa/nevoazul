import * as React from 'react'
import Hero from '@/components/About/Hero/Hero'
import Why from '@/components/About/Why/Why'

import SEO from '@/components/SEO/SEO'

const About = () => {
  return (
    <>
      <SEO title={'Sobre'} keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <Why />
    </>
  )
}

export default About
