import styled from 'styled-components'
import * as UI from '../../../UI/index'

export const ArticleImage = styled.div`
  width: 100%;
  height: 565px;

  opacity: 1;

  margin-bottom: 32px;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`

export const Detail = styled(UI.Detail)`
  margin-bottom: 0.25rem;
`

export const TitleHolder = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 0.25rem;
  margin-bottom: 0.8rem;
`

export const TitleLink = styled(UI.Title)`
  cursor: pointer;
`

export const Holder = styled.div`
  cursor: pointer;

  width: 100%;
  max-width: 525px;

  margin-top: 230px;

  &:last-child {
    margin-right: none;
  }

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
