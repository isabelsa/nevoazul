import React from 'react'
import { ArrowLink } from '../../UI/index'

import * as S from './NewsletterPlug.css'

const NewsletterPlug = () => {
  return (
    <S.NewsletterPlug>
      <S.Subscribe>
        <S.Title>Subscreve a newsletter</S.Title>
        <ArrowLink>Ler mais</ArrowLink>
      </S.Subscribe>
      <S.Text>
        Uma newsletter mensal de poucas linhas sobre como a tecnologia, a
        cultura e o design nos podem tornar mais humanos numa era cada vez mais
        digital.
      </S.Text>
    </S.NewsletterPlug>
  )
}

export default NewsletterPlug
