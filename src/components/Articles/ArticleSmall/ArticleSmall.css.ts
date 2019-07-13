import styled from 'styled-components'

export const ArticleImage = styled.div`
  width: 17.15rem;
  height: 13rem;
  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;

  margin-bottom: 1.5rem;
`

export const Holder = styled.div`
  width: 100%;
  max-width: 16rem;

  &:last-child {
    margin-right: none;
  }
`
