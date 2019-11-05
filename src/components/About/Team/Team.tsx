import * as React from 'react'

import { Title, Text } from '../../UI/index'

import { graphql, useStaticQuery } from 'gatsby'

const Team = () => {
  const { aboutYaml } = useStaticQuery(query)

  return (
    <div>
      <Title>{aboutYaml.team.title}</Title>
      <Text>{aboutYaml.team.ines.name}</Text>
      <Text>{aboutYaml.team.ines.description}</Text>
      <Text>{aboutYaml.team.isabel.name}</Text>
      <Text>{aboutYaml.team.isabel.description}</Text>
      <Text>{aboutYaml.team.miguel.name}</Text>
      <Text>{aboutYaml.team.miguel.description}</Text>
      <Text>{aboutYaml.team.pedrocodeco.name}</Text>
      <Text>{aboutYaml.team.pedrocodeco.description}</Text>
      <Text> {aboutYaml.team.pedrooliveira.name}</Text>
      <Text>{aboutYaml.team.pedrooliveira.description}</Text>
    </div>
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
