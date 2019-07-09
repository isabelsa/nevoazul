import React from 'react'

import ArticleBig from '../Articles/ArticleBig/ArticleBig'

import * as S from './Arcticles.css'

const Articles = () => {
  return (
    <div>
      <S.Holder>
        <ArticleBig />
        <ArticleBig />
      </S.Holder>
    </div>
  )
}

export default Articles
