import React from 'react'
import { Text, TextSerif, Label } from '../../UI'
import * as S from './Articles.css'

const Articles = () => {
  return (
    <S.Articles>
      <S.Display>Neste número</S.Display>

      <S.Holder>
        <S.Article>
          <Label>Rodolfo Oliveira</Label>
          <S.Subtitle>
            À conversa com Inês Santos Silva: O futuro tem futuro?
          </S.Subtitle>
          <Text>
            A Nevoazul explora a relação que temos com os meios de comunicação e
            a tecnologia. Fundada em 2016, a revista explora como, numa
            sociedade movida a informação, tão depressa estamos no papel de
            produtores, como no de consumidores.
          </Text>
        </S.Article>

        <S.Article>
          <Label>Rodolfo Oliveira</Label>
          <S.Subtitle>
            À conversa com Inês Santos Silva: O futuro tem futuro?
          </S.Subtitle>
          <Text>
            A Nevoazul explora a relação que temos com os meios de comunicação e
            a tecnologia. Fundada em 2016, a revista explora como, numa
            sociedade movida a informação, tão depressa estamos no papel de
            produtores, como no de consumidores.
          </Text>
        </S.Article>
      </S.Holder>

      <S.Article>
        <Label>Rodolfo Oliveira</Label>
        <S.Subtitle>
          À conversa com Inês Santos Silva: O futuro tem futuro?
        </S.Subtitle>
        <Text>
          A Nevoazul explora a relação que temos com os meios de comunicação e a
          tecnologia. Fundada em 2016, a revista explora como, numa sociedade
          movida a informação, tão depressa estamos no papel de produtores, como
          no de consumidores.
        </Text>
      </S.Article>

      <S.ArticlesGrid>
        <S.ArticleGrid>
          <TextSerif>12</TextSerif>
          <S.TextSerif>Entre o meio e a mensage: A Escrita</S.TextSerif>
          <Label>Inês Catarina Pinto</Label>
        </S.ArticleGrid>
        <S.ArticleGrid>
          <TextSerif>12</TextSerif>
          <S.TextSerif>Entre o meio e a mensage: A Escrita</S.TextSerif>
          <Label>Inês Catarina Pinto</Label>
        </S.ArticleGrid>
        <S.ArticleGrid>
          <TextSerif>12</TextSerif>
          <S.TextSerif>Entre o meio e a mensage: A Escrita</S.TextSerif>
          <Label>Inês Catarina Pinto</Label>
        </S.ArticleGrid>
        <S.ArticleGrid>
          <TextSerif>12</TextSerif>
          <S.TextSerif>Entre o meio e a mensage: A Escrita</S.TextSerif>
          <Label>Inês Catarina Pinto</Label>
        </S.ArticleGrid>
        <S.ArticleGrid>
          <TextSerif>12</TextSerif>
          <S.TextSerif>Entre o meio e a mensage: A Escrita</S.TextSerif>
          <Label>Inês Catarina Pinto</Label>
        </S.ArticleGrid>
        <S.ArticleGrid>
          <TextSerif>12</TextSerif>
          <S.TextSerif>Entre o meio e a mensage: A Escrita</S.TextSerif>
          <Label>Inês Catarina Pinto</Label>
        </S.ArticleGrid>
      </S.ArticlesGrid>
    </S.Articles>
  )
}

export default Articles
