import styled from 'styled-components'
import * as UI from '../../../UI/index'

export const ArticleImage = styled.div`
  width: 100%;
  height: 565px;

  margin-bottom: 32px;

  opacity: 1;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`

export const TitleHolder = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const TitleLink = styled(UI.Title)`
  cursor: pointer;
`

export const Text = styled(UI.Text)`
  width: 100%;
`

export const Holder = styled.div`
  cursor: pointer;

  width: 100%;
  max-width: 413px;

  margin-bottom: 100px;

  &:last-child {
    margin-right: none;
  }

  &:hover {
    ${ArticleImage} {
      opacity: 0.8;
    }

    ${TitleLink} {
      &::before {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 525px;
  }
`
