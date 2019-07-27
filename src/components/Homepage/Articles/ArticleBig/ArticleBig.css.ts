import styled from 'styled-components'
import * as UI from '../../../UI/index'

export const ArticleImage = styled.div`
  width: 100%;
  height: 36rem;
  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;

  margin-bottom: 1.5rem;
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

  &::before {
    content: '';
    height: 1px;
    width: 0;
    background-color: ${({ theme }) => theme.colors.blue.default};
    position: absolute;
    bottom: 6px;
    left: 0px;

    transition: all ${({ theme }) => theme.transitions.ease()};
  }
`

export const Holder = styled.div`
  width: 100%;
  max-width: 34rem;
  cursor: pointer;

  &:last-child {
    margin-right: none;
  }

  &:hover {
    ${ArticleImage} {
      -webkit-box-shadow: 10px 4px 44px -9px rgba(0, 0, 0, 0.27);
      -moz-box-shadow: 10px 4px 44px -9px rgba(0, 0, 0, 0.27);
      box-shadow: 10px 4px 44px -9px rgba(0, 0, 0, 0.27);
    }

    ${TitleLink} {
      &::before {
        text-decoration: underline;
      }
    }
  }
`
