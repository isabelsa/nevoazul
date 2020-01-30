import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Text, Kicker } from '../../../UI/index'

import * as S from './ArticleBig.css'

type ArticleBigProps = {
  title: string
  tags: Array<string>
  description: string
  link: string
  image: any
}

const ArticleBig: React.FC<ArticleBigProps> = ({
  title,
  tags,
  description,
  link,
  image,
}) => {
  return (
    <Link to={link}>
      <S.Holder>
        <S.ArticleImage>
          <Img fluid={image} />
        </S.ArticleImage>
        <Kicker>{tags.join(', ')}</Kicker>
        <S.TitleHolder>
          <S.TitleLink>{title}</S.TitleLink>
        </S.TitleHolder>
        <Text>{description} </Text>
      </S.Holder>
    </Link>
  )
}

export default ArticleBig
