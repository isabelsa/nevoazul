import styled from 'styled-components'

import Asterisk from '../../UI/Assets/Asterisk'
import magazine from '../../../assets/images/magazine-preview.png'

import * as UI from '../../UI/index'

export const MagazinePlug = styled.div`
  position: relative;
  display: flex;

  padding: 130px 70px;
`

export const Content = styled.div`
  position: relative;

  max-width: 380px;
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
`

export const ContentImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 400px;
  height: 400px;
  background-image: url(${magazine});
  background-size: cover;
  background-position: left center;

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`

export const AsteriskShape = styled(Asterisk)<{ isHovered: boolean }>`
  position: absolute;
  top: 30%;
  left: -4rem;

  z-index: -1;
`
