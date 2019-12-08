import styled from 'styled-components'
import {
  Title,
  Subtitle as TitleStyled,
  TextSerif as TextStyled,
} from '../../UI'

export const Display = styled(Title)`
  margin-bottom: 80px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 48px;
  }
`

export const Subtitle = styled(TitleStyled)`
  margin-top: 20px;
  margin-bottom: 16px;
`

export const Articles = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 14rem 10%;

  @media only screen and (max-width: 768px) {
    padding: 6rem 3rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 3rem 1.5rem;
  }
`

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  max-width: 376px;

  &:nth-child(even) {
    margin-top: 160px;
  }

  &:last-of-type {
    margin-left: 98px;
  }

  @media only screen and (max-width: 768px) {
    &:nth-child(even) {
      margin-top: 40px;
    }

    &:last-of-type {
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 964px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;
  }
`

export const ArticlesGrid = styled.div`
  margin-top: 160px;

  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 280px));
  grid-gap: 24px;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 768px) {
    margin-top: 60px;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }

  @media only screen and (max-width: 425px) {
    margin-top: 60px;
    grid-template-columns: repeat(1, 100%);
  }
`

export const ArticleGrid = styled.div`
  width: 100%;
`

export const TextSerif = styled(TextStyled)`
  margin-top: 12px;
  margin-bottom: 8px;
`
