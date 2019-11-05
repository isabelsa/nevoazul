import React from 'react'
import { Detail, Text } from '../../../UI/index'

import * as S from './ArticleSmall.css'

const ArticleSmall = () => {
  return (
    <S.Holder>
      <S.ArticleImage />
      <Detail>Placeholder</Detail>
      <S.TitleHolder>
        <S.TitleLink>Placeholder</S.TitleLink>
      </S.TitleHolder>
      <Text>
        The Thin Line é um projeto de fotografia documental, da autoria do
        Colectivo Photo. A proposta é olhar, refletir e iniciar um diálogo sobre
        as fronteiras e o que elas representam.{' '}
      </Text>
    </S.Holder>
  )
}

export default ArticleSmall