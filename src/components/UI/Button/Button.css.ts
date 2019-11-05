import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};

  padding: 1rem;
`
