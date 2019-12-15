import styled from 'styled-components'

import ArrowRight from '../../Icons/ArrowRight'
import { Link } from 'gatsby'

export const Arrow = styled(ArrowRight)`
  margin-left: 0.4rem;

  transition: ${({ theme }) => theme.transitions.cubic()};
`

export const Holder = styled(Link)`
  display: inline-flex;
  flex-direction: row;

  &:hover {
    ${Arrow} {
      margin-left: 0.75rem;
    }
  }
`

export const HolderA = styled.a`
  display: inline-flex;
  flex-direction: row;

  &:hover {
    ${Arrow} {
      margin-left: 0.75rem;
    }
  }
`

export const ArrowLink = styled.p`
  cursor: pointer;
`
