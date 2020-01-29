import React from 'react'
import { Link } from 'gatsby'
import { Text, Kicker } from '../../../UI/index'

import * as S from './ArticleBig.css'

type ArticleBigProps = {
  title: string
  tags: Array<string>
  description: string
  link: string
}

const ArticleBig: React.FC<ArticleBigProps> = ({
  title,
  tags,
  description,
  link,
}) => {
  return (
    <Link to={link}>
      <S.Holder>
        <S.ArticleImage />
        <Kicker>{tags.map(tag => tag)}}</Kicker>
        <S.TitleHolder>
          <S.TitleLink>{title}</S.TitleLink>
        </S.TitleHolder>
        <Text>{description} </Text>
      </S.Holder>
    </Link>
  )
}

export default ArticleBig
