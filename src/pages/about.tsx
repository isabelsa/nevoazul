import React from 'react'
import Hero from '@/components/About/Hero/Hero'
import Team from '@/components/About/Team/Team'

import { graphql } from 'gatsby'

import SEO from '@/components/SEO/SEO'

type AboutTeam = {
  team_member_role: string
  team_member_name: string
}

type AboutPageProps = {
  data: {
    prismicAbout: {
      data: {
        about_hero_kicker: string
        about_hero_title: string
        about__hero_section_one: string
        about_hero_section_two: string
        about_team_description: string
        about_team: AboutTeam[]
      }
    }
  }
}

const About: React.FC<AboutPageProps> = ({ data }) => {
  const content = data.prismicAbout.data

  return (
    <>
      <SEO
        title="Sobre o projecto"
        description="Numa sociedade movida a informação, em que tão depressa estamos no papel de produtores, como no de consumidores, a Nevoazul explora a relação que temos com os meios de comunicação e a tecnologia."
        keywords={[
          `nevoazul`,
          `revista`,
          `magazine`,
          `humanity`,
          `tehcnology`,
          `work`,
        ]}
      />
      <Hero content={content} />
      <Team content={content} />
    </>
  )
}

export default About

export const query = graphql`
  query About {
    prismicAbout(lang: { in: "pt-pt" }) {
      data {
        about_hero_kicker
        about_hero_title
        about__hero_section_one
        about_hero_section_two
        about_team_description
        about_team {
          team_member_role
          team_member_name
        }
      }
    }
  }
`
