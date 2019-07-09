import styled from 'styled-components'

export const ArticleImage = styled.div`
  width: 36rem;
  height: 36rem;
  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;
`

export const Holder = styled.div`
  margin-right: 1.5rem;
`
