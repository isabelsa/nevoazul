import styled from 'styled-components'
import Link from 'gatsby-link'

export const Holder = styled.div`
  display: inline-block;
  position: relative;
`

export const NavLink = styled(Link)`
  cursor: pointer;

  &::before {
    content: '';
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.foreground};
    position: absolute;
    bottom: -3px;
    left: 0px;

    transition: ${({ theme }) => theme.transitions.cubic()};
  }

  &:hover {
    &::before {
      width: 0%;
    }
  }
`
