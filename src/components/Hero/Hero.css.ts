import styled from 'styled-components'

export const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.beige.default};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 40rem;
`
