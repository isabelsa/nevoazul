import React from 'react'
import { Detail, Text, Title } from '../../../UI/index'

import * as S from './ArticleBig.css'

const ArticleBig = () => {
  return (
    <S.Holder>
      <S.ArticleImage />
      <S.Detail>Placeholder</S.Detail>
      <S.TitleHolder>
        <S.TitleLink>A framework for performing</S.TitleLink>
      </S.TitleHolder>
      <Text>
        The Thin Line é um projeto de fotografia documental, da autoria do
        Colectivo Photo. A proposta é olhar, refletir e iniciar um diálogo sobre
        as fronteiras e o que elas representam.{' '}
      </Text>
    </S.Holder>
  )
}

export default ArticleBig
