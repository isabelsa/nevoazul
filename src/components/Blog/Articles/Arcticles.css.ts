import styled from 'styled-components'

export const Holder = styled.div`
  padding: 10% 10% 0% 10%;

  @media only screen and (max-width: 768px) {
    padding: 40px;
  }

  @media only screen and (max-width: 425px) {
    padding: 20px;
  }
`

export const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
