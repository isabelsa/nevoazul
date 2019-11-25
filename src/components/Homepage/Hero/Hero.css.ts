import styled from 'styled-components'
import * as UI from '../../UI'

import magazine from '../../../assets/images/magazine-small.png'
import line from '../../../assets/images/line.png'

export const Hero = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.blue.default};
`

export const HeroTitle = styled(UI.Display)`
  text-align: center;

  margin-bottom: 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  width: 100%;
  max-width: 32rem;
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

export const SmallMagazineBottom = styled.div`
  position: absolute;
  bottom: -100px;
  left: 400px;

  width: 400px;
  height: 300px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    bottom: -15%;
    left: 5%;
  }
`

export const SmallMagazineLeft = styled.div`
  position: absolute;
  bottom: 270px;
  left: -100px;

  width: 400px;
  height: 300px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    bottom: 40%;
    left: -60%;
  }
`

export const SmallMagazineTop = styled.div`
  position: absolute;
  top: -100px;
  right: 200px;

  width: 400px;
  height: 300px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    top: -20%;
    right: 16%;
  }
`

export const SmallMagazineRight = styled.div`
  position: absolute;
  bottom: 150px;
  right: -100px;

  width: 400px;
  height: 300px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    top: 40%;
    left: 70%;
  }
`

export const Line = styled.div`
  position: absolute;
  top: 33%;
  left: 33%;

  width: 130px;
  height: 100px;

  background-image: url(${line});
  background-size: contain;
  background-position: center center;
`
