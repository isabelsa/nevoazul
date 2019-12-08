import styled from 'styled-components'
import { Title as TitleStyled } from '../../UI'

import magazine from '../../../assets/images/magazine-small.png'

export const Title = styled(TitleStyled)`
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`

export const About = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 100%;

  padding: 14rem 10%;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    padding: 6rem 3rem;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;

    padding: 3rem 1.5rem;
  }
`

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 476px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Magazine = styled.div`
  position: absolute;
  top: -60px;
  right: 0px;

  width: 580px;
  height: 450px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 1200px) {
    position: relative;
    top: 0px;
    left: 0px;

    margin-top: 24px;

    width: 100%;
    max-width: 400px;
    max-height: 300px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    top: 0px;
    left: 0px;

    margin-top: 24px;

    width: 100%;
    max-width: 320px;
    max-height: 240px;
  }
`
