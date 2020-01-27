import React from 'react'

import ArticleBig from './ArticleBig/ArticleBig'
import ArticleSmall from './ArticleSmall/ArticleSmall'

import * as S from './Arcticles.css'

const Articles = () => {
  return (
    <S.Holder>
      <S.Flex>
        <ArticleSmall />
        <ArticleBig />
        <ArticleBig />
      </S.Flex>
    </S.Holder>
  )
}

export default Articles
