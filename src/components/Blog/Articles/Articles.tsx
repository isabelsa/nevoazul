import React from 'react'

import ArticleBig from './ArticleBig/ArticleBig'

import * as S from './Arcticles.css'

const Articles = () => {
  return (
    <div>
      <p>Artigos Selecionados</p>
      <S.Holder>
        <S.Flex>
          <ArticleBig />
          <ArticleBig />
          <ArticleBig />
          <ArticleBig />
        </S.Flex>
      </S.Holder>
    </div>
  )
}

export default Articles
