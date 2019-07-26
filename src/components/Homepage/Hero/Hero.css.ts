import styled from 'styled-components'

import * as UI from '../../UI/index'
import hero from '../../../assets/images/hero.png'
import roundShape from '../../../assets/images/roundShapeCTA.svg'

export const Hero = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.beige.default};
  background-image: url(${hero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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
  max-width: 28rem;
`

export const ArrowDown = styled(UI.ArrowDown)``

export const CTA = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Holder = styled.div`
  position: relative;
`

export const CTAText = styled(UI.Text)`
  position: absolute;
  bottom: 6rem;
  right: 5rem;
  text-align: center;

  max-width: 3.25rem;

  color: ${({ theme }) => theme.colors.background};
`

export const RoundShape = styled(roundShape)``

export const Anchor = styled(UI.AnchorLink)`
  position: absolute;
  bottom: 8%;
  left: 10%;

  transition: ${({ theme }) => theme.transitions.ease()};

  &:hover {
    cursor: pointer;
    bottom: 7%;
  }
`
