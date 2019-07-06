import styled from 'styled-components'

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.brown.default};
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
`
