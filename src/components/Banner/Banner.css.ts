import styled, { css } from 'styled-components'

import * as UI from '../UI/index'

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.brown.default};
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  transition: ${({ theme }) => theme.transitions.cubic()};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown.dark};
    cursor: pointer;
  }

  ${p =>
    !p.show &&
    css`
      display: none;
    `}
`

export const BannerHolder = styled.div`
  background-color: ${({ theme }) => theme.colors.brown.default};
`

export const Close = styled(UI.Close)`
  position: absolute;
  right: 1rem;
  top: 0.8rem;
`
