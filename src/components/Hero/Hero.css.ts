import styled from 'styled-components'

import * as UI from '../UI/index'
import hero from '../../assets/images/hero.png'

export const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.beige.default};
  background-image: url(${hero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40rem;

  padding: 10% 10%;
`
export const Content = styled.div`
  max-width: 30rem;
`

export const Display = styled(UI.Display)`
  margin-bottom: 1rem;
`

export const Text = styled(UI.Text)`
  margin-bottom: 2rem;
`
