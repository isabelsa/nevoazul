import styled from 'styled-components'
import { motion } from 'framer-motion'
import * as UI from '../../UI'

import hero_one from '../../../assets/images/hero_magazine_1.png'
import hero_two from '../../../assets/images/hero_magazine_2.png'
import hero_three from '../../../assets/images/hero_magazine_3.png'
import hero_four from '../../../assets/images/hero_magazine_4.png'
import line from '../../../assets/images/line.png'

export const Hero = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.blue.default};
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const HeroTitle = styled(UI.Display)`
  text-align: center;

  margin-bottom: 0.25rem;
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
`

export const SmallMagazineTop = styled.div`
  position: absolute;
  top: -100px;
  right: 200px;

  width: 500px;
  height: 300px;
  background-image: url(${hero_one});
  background-size: contain;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    top: -20%;
    right: 16%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallMagazineRight = styled.div`
  position: absolute;
  bottom: 150px;
  right: -100px;

  width: 400px;
  height: 300px;
  background-image: url(${hero_two});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    top: 40%;
    left: 70%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallMagazineBottom = styled.div`
  position: absolute;
  bottom: -150px;
  left: 400px;

  width: 400px;
  height: 300px;
  background-image: url(${hero_three});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    bottom: -200px;
    left: 50%;
  }
`

export const SmallMagazineLeft = styled.div`
  position: absolute;
  bottom: 270px;
  left: -100px;

  width: 400px;
  height: 300px;
  background-image: url(${hero_four});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    bottom: 40%;
    left: -60%;
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
