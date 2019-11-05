import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  background: rgba(0, 0, 0, 0.3);
`

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 2px;

  padding: 1.25rem;
  z-index: 9999;
`

export const Content = styled.div<{ isOpen: boolean; position: string }>`
  position: fixed;

  ${p =>
    p.position === 'top' &&
    css`
      top: 1.25rem;
      right: 1.25rem;
    `}

  ${p =>
    p.position === 'bottom' &&
    css`
      bottom: 1.25rem;
      left: 1.25rem;
    `}

  display: flex;
  margin: auto;
  z-index: 99;

  display: ${p => (p.isOpen ? 'flex' : 'none')};
`
