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
        <Heading>xxx</Heading>
      </S.DescriptionWrapper>

      <S.TeamHolder>
        <S.TeamMember>
          <TextSerif italic>{aboutYaml.team.ines.description}</TextSerif>
          <Heading>{aboutYaml.team.isabel.name}</Heading>
        </S.TeamMember>

        <S.TeamMember>
          <TextSerif italic>{aboutYaml.team.isabel.description}</TextSerif>
          <Heading>{aboutYaml.team.miguel.name}</Heading>
        </S.TeamMember>

        <S.TeamMember>
          <TextSerif italic>{aboutYaml.team.miguel.description}</TextSerif>
          <Heading>{aboutYaml.team.pedrocodeco.name}</Heading>
        </S.TeamMember>

        <S.TeamMember>
          <TextSerif italic>{aboutYaml.team.pedrocodeco.description}</TextSerif>
          <Heading> {aboutYaml.team.pedrooliveira.name}</Heading>
        </S.TeamMember>

        <S.TeamMember>
          <TextSerif italic>{aboutYaml.team.pedrocodeco.description}</TextSerif>
          <Heading> {aboutYaml.team.pedrooliveira.name}</Heading>
        </S.TeamMember>

        <S.TeamMember>
          <TextSerif italic>{aboutYaml.team.pedrocodeco.description}</TextSerif>
          <Heading> {aboutYaml.team.pedrooliveira.name}</Heading>
        </S.TeamMember>
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
        ines {
          name
          description
        }
        isabel {
          name
          description
        }
        miguel {
          name
          description
        }
        pedrocodeco {
          name
          description
        }
        pedrooliveira {
          name
          description
        }
      }
    }
  }
`
