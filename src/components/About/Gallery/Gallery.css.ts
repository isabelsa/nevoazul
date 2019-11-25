import styled from 'styled-components'

import * as UI from '../../UI/index'

export const Gallery = styled.div`
  position: absolute;
  top: 8rem;
  right: 0rem;

  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 0;
  margin: 0;

  height: 38rem;
  width: 25rem;

  background-color: ${({ theme }) => theme.colors.greyscale.light};
`

export const Image = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 50vw;
`

export const Caption = styled(UI.Detail)`
  margin-top: 1rem;
`
