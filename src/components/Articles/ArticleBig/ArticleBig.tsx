import React from 'react'
import { Detail, NavLink, Text, Title } from '../../UI/index'

import * as S from './ArticleBig.css'

const ArticleBig = () => {
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

export default ArticleBig
