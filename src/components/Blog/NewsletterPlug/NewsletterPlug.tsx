import React from 'react'
import { ArrowLink } from '../../UI/index'

import * as S from './NewsletterPlug.css'

import { graphql, useStaticQuery } from 'gatsby'

const NewsletterPlug = () => {
  const { blogYaml } = useStaticQuery(query)
  return (
    <S.NewsletterPlug>
      <S.Subscribe>
        <S.Title>{blogYaml.newsletter.title}</S.Title>
        <ArrowLink>{blogYaml.newsletter.readmore}</ArrowLink>
      </S.Subscribe>
      <S.Text>{blogYaml.newsletter.description}</S.Text>
    </S.NewsletterPlug>
  )
}

export default NewsletterPlug

export const query = graphql`
  {
    blogYaml {
      newsletter {
        title
        description
        readmore
      }
    }
  }
`
