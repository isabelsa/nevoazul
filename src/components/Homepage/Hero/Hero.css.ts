import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.blue.default};
`
