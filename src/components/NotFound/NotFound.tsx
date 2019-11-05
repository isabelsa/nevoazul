import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ArrowLink } from '../UI/index'

import * as S from './NotFound.css'

const NotFound = () => {
  const { notFoundYaml } = useStaticQuery(query)

  return (
    <S.NotFound>
      <S.NotFoundContent>
        <p>{notFoundYaml.hero.headline}</p>
        <p>{notFoundYaml.hero.title}</p>
        <ArrowLink>{notFoundYaml.hero.cta}</ArrowLink>
      </S.NotFoundContent>
    </S.NotFound>
  )
}

export default NotFound

export const query = graphql`
  {
    notFoundYaml {
      hero {
        headline
        title
        cta
      }
    }
  }
`
