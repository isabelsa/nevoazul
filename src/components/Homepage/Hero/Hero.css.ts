import styled from 'styled-components'
import { motion } from 'framer-motion'
import * as UI from '../../UI'

import line from '../../../assets/images/line.png'

export const Hero = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.blue.light};
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const HeroKicker = styled(UI.Kicker)`
  margin-bottom: 4px;
`

export const HeroTitle = styled(UI.Display)`
  text-align: center;

  margin-bottom: 12px;
  line-height: 1.2;
  letter-spacing: -0.5px;

  width: 100%;
  max-width: 28rem;
`

export const HeroDescription = styled(UI.Text)`
  text-align: center;
  max-width: 28rem;
  margin-bottom: 1.5rem;
`

export const ContentHolder = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin-top: 3rem;
  margin-left: 20%;

  @media only screen and (max-width: 768px) {
    margin-left: 0%;
  }

  @media only screen and (max-width: 768px) {
    margin-top: -24px;
  }
`

export const SmallMagazineRight = styled.div`
  position: absolute;
  bottom: 80px;
  right: -140px;

  width: 400px;
  height: 300px;

  @media only screen and (max-width: 1200px) {
    bottom: 80px;
    right: -260px;
  }

  @media only screen and (max-width: 1000px) {
    right: -300px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallMagazineBottom = styled.div`
  position: absolute;
  bottom: -220px;
  right: 400px;

  width: 400px;
  height: 300px;

  @media only screen and (max-width: 1000px) {
    bottom: -220px;
    right: 200px;
  }
`

export const SmallMagazineLeft = styled.div`
  position: absolute;
  top: 120px;
  left: -270px;

  width: 800px;
  height: 600px;

  @media only screen and (max-width: 1200px) {
    top: 120px;
    left: -400px;
  }

  @media only screen and (max-width: 1000px) {
    top: 120px;
    left: -500px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
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
