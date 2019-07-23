import styled from 'styled-components'

import ArrowRight from '../../Icons/ArrowRight'

export const Arrow = styled(ArrowRight)`
  margin-left: 0.6rem;

  transition: ${({ theme }) => theme.transitions.cubic()};
`

export const Holder = styled.div`
  display: inline-flex;
  flex-direction: row;

  &:hover {
    ${Arrow} {
      margin-left: 1rem;
    }
  }
`

export const ArrowLink = styled.p`
  cursor: pointer;
`
