import styled from 'styled-components'
import * as UI from '../../UI/index'

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  height: 100vh;

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

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30rem;
  }
`

export const HeroImage = styled.div<{}>`
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
  background-color: #f7f3f1;
  position: relative;

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

export const HeroCategory = styled(UI.Text)`
  margin-bottom: 1rem;
  font-family: 'Copernicus';
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

export const Arrow = styled(UI.Arrow)`
  position: absolute;
  bottom: 0;
`
