import styled from 'styled-components'

import Asterisk from '../../UI/Assets/Asterisk'
import magazine from '../../../assets/images/magazine-preview.png'

import * as UI from '../../UI/index'

export const MagazinePlug = styled.div`
  position: relative;
  display: flex;

  padding: 130px 70px;

  @media only screen and (max-width: 768px) {
    padding: 60px 40px;
  }

  @media only screen and (max-width: 425px) {
    padding: 40px 20px;
  }
`

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 380px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

export const ContentHighlight = styled(UI.Kicker)`
  margin-bottom: 0.5rem;
`

export const ContentTitle = styled(UI.Title)`
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`

export const ContentDescription = styled.div`
  width: 100%;
  max-width: 23rem;

  margin-left: 16px;
  padding-top: 30px;
`

export const ContentText = styled(UI.Text)`
  margin-bottom: 2rem;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`

export const ContentTextMobile = styled(UI.Text)`
  display: none;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`

export const ContentImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 400px;
  height: 400px;
  margin-top: 80px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 80%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const AsteriskShape = styled(Asterisk)<{ isHovered: boolean }>`
  position: absolute;
  top: 30%;
  left: -4rem;

  z-index: -1;
`
