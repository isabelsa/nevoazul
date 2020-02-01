import styled from 'styled-components'
import * as UI from '../../UI/index'
import { default as GalleryStyled } from '../Gallery/Gallery'

import pedro from '../../../assets/images/pedro.jpg'

export const Hero = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  position: relative;

  padding: 190px 70px 70px;

  @media only screen and (max-width: 1200px) {
    flex-direction: row;
    padding: 160px 30px 30px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: space-between;

    margin-right: -32px;

    padding: 40px 30px 30px;
  }

  @media only screen and (max-width: 425px) {
    align-items: flex-end;

    padding: 40px 16px 16px;
  }
`

export const Kicker = styled(UI.Kicker)`
  margin-bottom: 8px;
`

export const Title = styled(UI.Title)`
  margin-bottom: 32px;
  max-width: 525px;

  @media only screen and (max-width: 900px) {
    font-size: 26px;
    line-height: 36px;

    margin-bottom: 16px;
  }
`

export const Text = styled(UI.Body)`
  &:first-of-type {
    margin-right: 24px;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 48rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: 100%;
  max-width: 400px;

  &:first-of-type {
    max-width: 360px;
  }

  @media only screen and (max-width: 900px) {
    &:first-of-type {
      max-width: 100%;
    }

    &:last-of-type {
      margin-top: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: none;
    width: 100%;

    display: none;
  }
`

export const Holder = styled.div`
  @media only screen and (max-width: 1200px) {
    margin-right: 32px;
    margin-top: 60px;
  }
`

export const Gallery = styled(GalleryStyled)``

export const Image = styled.div`
  @media only screen and (max-width: 768px) {
    width: 500px;
    height: 300px;

    background-image: url(${pedro});
    background-size: cover;
  }

  @media only screen and (max-width: 425px) {
    width: 300px;
    height: 240px;
  }
`
