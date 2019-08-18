import styled from 'styled-components'

import * as UI from '../../UI/index'

export const Gallery = styled.div`
  position: absolute;
  top: 8rem;
  right: 0;
`
export const Image = styled.div`
  background-color: ${({ theme }) => theme.colors.green.default};
  height: 38rem;
  width: 22rem;
`

export const Caption = styled(UI.Detail)`
  margin-top: 1rem;
`
