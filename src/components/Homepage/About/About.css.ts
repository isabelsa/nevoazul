import styled from 'styled-components'
import {
  Title as TitleStyled,
  Text as TextStyled,
  Kicker as StyledKicker,
} from '../../UI'

export const Title = styled(TitleStyled)`
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`

export const About = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 100%;

  padding: 14rem 10% 3rem 10%;

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

export const Text = styled(TextStyled)`
  margin-bottom: 24px;
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
  top: 140px;
  right: -40px;

  width: 580px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const MagazineImage = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`

export const Kicker = styled(StyledKicker)``
