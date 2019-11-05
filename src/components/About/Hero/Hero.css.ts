import styled from 'styled-components'

import * as UI from '../../UI/index'

export const Hero = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;

  position: relative;

  padding: 14rem 10% 10% 10%;
`

export const Title = styled(UI.Title)`
  margin-bottom: 2rem;
  max-width: 32rem;
`

export const Text = styled(UI.Text)`
  &:first-of-type {
    margin-right: 1.5rem;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 48rem;
`
