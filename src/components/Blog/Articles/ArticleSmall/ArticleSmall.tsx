import React from 'react'
import { Link } from 'gatsby'
import { Kicker } from '../../../UI/index'

import * as S from './ArticleSmall.css'

type ArticleSmallProps = {
  title: string
  tags: Array<string>
  description: string
  link: string
}

const ArticleSmall: React.FC<ArticleSmallProps> = ({
  title,
  tags,
  description,
  link,
}) => {
  return (
    <Link to={link}>
      <S.Holder>
        <S.ArticleImage />
        <Kicker>{tags.map(tag => tag)}</Kicker>
        <S.TitleHolder>
          <S.TitleLink>{title}</S.TitleLink>
        </S.TitleHolder>
        <S.Text>{description}</S.Text>
      </S.Holder>
    </Link>
  )
}

export default ArticleSmall
