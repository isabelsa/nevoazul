import React from 'react'
import { ArrowLink } from '../../UI/index'

import * as S from './NewsletterPlug.css'

import { graphql, useStaticQuery } from 'gatsby'

const NewsletterPlug = () => {
  const { homepageYaml } = useStaticQuery(query)
  return (
    <S.NewsletterPlug>
      <S.Subscribe>
        <S.Title>{homepageYaml.newsletter.title}</S.Title>
        <ArrowLink>{homepageYaml.newsletter.readmore}</ArrowLink>
      </S.Subscribe>
      <S.Text>{homepageYaml.newsletter.description}</S.Text>
    </S.NewsletterPlug>
  )
}

export default NewsletterPlug

export const query = graphql`
  {
    homepageYaml {
      newsletter {
        title
        description
        readmore
      }
    }
  }
`
