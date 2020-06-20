import React from 'react'
import { Heading, TextSerif } from '../../UI/index'
import * as S from './Team.css'

import { graphql, useStaticQuery } from 'gatsby'

const Team = () => {
  const { aboutYaml } = useStaticQuery(query)

  return (
    <S.Wrapper>
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
