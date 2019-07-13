import React from 'react'

import ArticleBig from '../Articles/ArticleBig/ArticleBig'
import ArcticleSmall from '../Articles/ArticleSmall/ArticleSmall'

import * as S from './Arcticles.css'

const Articles = () => {
  return (
    <div>
      <S.Holder>
        <S.Flex>
          <ArticleBig />
          <ArticleBig />
        </S.Flex>
        <S.Flex>
          <ArticleBig />
          <ArcticleSmall />
          <ArcticleSmall />
        </S.Flex>
      </S.Holder>
    </div>
  )
}

export default Articles
