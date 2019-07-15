import styled from 'styled-components'

export const Holder = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0% 10%;
`

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.beige.default};
`
