import React from 'react'
import { Kicker } from '../../../UI/index'

import * as S from './ArticleSmall.css'

const ArticleSmall = () => {
  return (
    <S.Holder>
      <S.ArticleImage />
      <Kicker>Design, Tecnologia</Kicker>
      <S.TitleHolder>
        <S.TitleLink>Placeholder</S.TitleLink>
      </S.TitleHolder>
      <S.Text>
        The Thin Line é um projeto de fotografia documental, da autoria do
        Colectivo Photo. A proposta é olhar, refletir e iniciar um diálogo sobre
        as fronteiras e o que elas representam.{' '}
      </S.Text>
    </S.Holder>
  )
}

export default ArticleSmall
