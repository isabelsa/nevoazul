import React from 'react'
import { Heading, TextSerif } from '../../UI/index'
import * as S from './Team.css'

import { graphql, useStaticQuery } from 'gatsby'

const Team = () => {
  const { aboutYaml } = useStaticQuery(query)

  return (
    <S.Wrapper>
      <S.DescriptionWrapper>
        <S.Description>{aboutYaml.team.title}</S.Description>

        <TextSerif italic>Email</TextSerif>
        <Heading>info@nevoazul.com</Heading>
      </S.DescriptionWrapper>

      <S.TeamHolder>
        {aboutYaml.team.members.map(member => {
          return (
            <S.TeamMember key={member.id}>
              <TextSerif italic>{member.name}</TextSerif>
              <Heading>{member.description}</Heading>
            </S.TeamMember>
          )
        })}
      </S.TeamHolder>
    </S.Wrapper>
  )
}

export default Team

export const query = graphql`
  {
    aboutYaml {
      team {
        title
        members {
          id
          name
          description
        }
      }
    }
  }
`
