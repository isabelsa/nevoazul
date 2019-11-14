import styled from 'styled-components'
import * as UI from '../../UI'

import magazine from '../../../assets/images/huge-magazine.png'

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.blue.default};
`

export const HeroTitle = styled(UI.Title)`
  text-align: center;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  width: 100%;
  max-width: 24rem;
`

export const HeroDescription = styled(UI.Text)`
  text-align: center;
  max-width: 28rem;
  margin-bottom: 1.5rem;
`

export const ContentHolder = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin-top: 3rem;
`

export const Magazine = styled.div`
  height: 800px;
  width: 100%;
  background-image: url(${magazine});
  background-size: cover;
  background-position: left center;
`
