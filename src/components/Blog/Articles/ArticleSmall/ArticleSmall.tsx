import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Kicker } from '../../../UI/index'

import * as S from './ArticleSmall.css'

type ArticleSmallProps = {
  title: string
  tags: Array<string>
  description: string
  link: string
  image: any
}

const ArticleSmall: React.FC<ArticleSmallProps> = ({
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
          <Img fluid={image} alt="Post" />
        </S.ArticleImage>
        <Kicker>{tags.join(', ')}</Kicker>
        <S.TitleHolder>
          <S.TitleLink>{title}</S.TitleLink>
        </S.TitleHolder>
        <S.Text>{description}</S.Text>
      </S.Holder>
    </Link>
  )
}

export default ArticleSmall
