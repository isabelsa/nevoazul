import * as React from 'react'
import { ArrowLink } from '../../UI/index'

import * as S from './Conversation.css'

import { graphql, useStaticQuery } from 'gatsby'

const Conversation = () => {
  const { aboutYaml } = useStaticQuery(query)

  return (
    <S.Wrapper>
      <S.Why>
        <S.TitleHolder>
          <S.Title>{aboutYaml.conversation.title}</S.Title>
        </S.TitleHolder>
        <S.Text>{aboutYaml.conversation.description}</S.Text>
        <ArrowLink>{aboutYaml.conversation.joinconversation}</ArrowLink>
        <S.ListItem>{aboutYaml.conversation.perks.first}</S.ListItem>
        <S.ListItem>{aboutYaml.conversation.perks.second}</S.ListItem>
        <S.ListItem>{aboutYaml.conversation.perks.third}</S.ListItem>
        <S.ListItem>{aboutYaml.conversation.perks.fourth}</S.ListItem>
        <S.ListItem>{aboutYaml.conversation.perks.fifth}</S.ListItem>
      </S.Why>
    </S.Wrapper>
  )
}

export default Conversation

export const query = graphql`
  {
    aboutYaml {
      conversation {
        title
        description
        joinconversation
        perks {
          first
          second
          third
          fourth
          fifth
        }
      }
    }
  }
`
