import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

export const Holder = styled.div`
  display: inline-block;
  position: relative;
`

export const HeaderLink = styled(Link)<{ mobile: boolean }>`
  cursor: pointer;
  font-size: 0.935rem;

  ${({ mobile }) =>
    mobile &&
    css`
      font-size: 24px;
      margin-bottom: 8px;
    `}

  &::before {
    content: '';
    height: 1px;
    width: 0%;
    background-color: ${({ theme }) => theme.colors.foreground};
    position: absolute;
    bottom: -2px;
    left: 0px;

    transition: ${({ theme }) => theme.transitions.cubic()};
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }

  &.active {
    &::before {
      width: 100%;
    }
  }
`
