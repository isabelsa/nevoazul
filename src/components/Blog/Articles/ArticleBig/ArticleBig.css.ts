import styled from 'styled-components'
import * as UI from '../../../UI/index'

export const ArticleImage = styled.div`
  width: 100%;
  height: 565px;

  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;

  opacity: 1;

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
`

export const Holder = styled.div`
  cursor: pointer;

  width: 100%;
  max-width: 525px;

  margin-top: 250px;

  &:last-of-type {
    margin-top: 70px;
    margin-bottom: 200px;
  }

  &:last-child {
    margin-right: none;
  }

  &:hover {
    opacity: 0.8;
  }
`
