import styled from 'styled-components'
import Link from 'gatsby-link'

export const FooterLink = styled(Link)`
  cursor: pointer;

  opacity: 1;
  transition: ${({ theme }) => theme.transitions.cubic()};

  &:hover {
    opacity: 0.5;
  }
`
