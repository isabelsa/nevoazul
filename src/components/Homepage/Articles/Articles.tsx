import React from 'react'
import { Text, TextSerif, Label, Kicker } from '../../UI'
import * as S from './Articles.css'

type ArticlesHighlited = {
  article_author: string
  article_description: string
  article_title: string
}

type ArticleSmall = {
  article_author: string
  article_page: string
  article_title: string
}

type ArticlesProps = {
  content: {
    articles_section_title: string
    article_highlighted: ArticlesHighlited[]
    article_small: ArticleSmall[]
  }
}

const Articles: React.FC<ArticlesProps> = ({ content }) => {
  return (
    <S.Articles>
      <S.Display>{content.articles_section_title}</S.Display>
      <S.Holder>
        {content.article_highlighted.slice(0, 2).map(art => {
          return (
            <S.Article>
              <Kicker>{art.article_author}</Kicker>
              <S.Subtitle>{art.article_title}</S.Subtitle>
              <Text>{art.article_description}</Text>
            </S.Article>
          )
        })}
      </S.Holder>

      <S.Article>
        <Label>{content.article_highlighted[2].article_author}</Label>
        <S.Subtitle>{content.article_highlighted[2].article_title}</S.Subtitle>
        <Text>{content.article_highlighted[2].article_description}</Text>
      </S.Article>

      <S.ArticlesGrid>
        {content.article_small.map(article => {
          return (
            <S.ArticleGrid key={article.article_title}>
              <S.Number>{article.article_page}. </S.Number>
              <S.TextSerif>{article.article_title}</S.TextSerif>
              <Label>{article.article_author}</Label>
            </S.ArticleGrid>
          )
        })}
      </S.ArticlesGrid>
    </S.Articles>
  )
}

export default Articles
