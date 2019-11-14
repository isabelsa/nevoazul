import styled from 'styled-components'

import * as UI from '../../UI/index'
import hero from '../../../assets/images/playtime.png'

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  height: 46rem;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export const HeroHolder = styled.div<{}>`
  width: 50%;
  height: 100%;

  overflow: hidden;
`

export const HeroImage = styled.div<{}>`
  background-image: url(${hero});
  background-position: center center;
  background-size: cover;

  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30rem;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.beige.light};

  padding: 3rem;

  width: 50%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 3rem;
  }
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

export const HeroCategory = styled(UI.Detail)`
  margin-bottom: 0.5rem;
`

export const HeroTitle = styled(UI.Display)`
  text-align: center;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  width: 100%;
  max-width: 30rem;
`

export const HeroDescription = styled(UI.Text)`
  text-align: center;
  max-width: 28rem;
  margin-bottom: 1.5rem;
`
