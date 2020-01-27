import styled from 'styled-components'
import * as UI from '../../../UI/index'

export const ArticleImage = styled.div`
  width: 100%;
  height: 565px;

  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;

  margin-bottom: 22px;

  opacity: 1;
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

  margin-bottom: 163px;

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
`
