import styled from 'styled-components'

import Asterisk from '../../UI/Assets/Asterisk'
import magazine from '../../../assets/images/magazine.jpg'

import * as UI from '../../UI/index'

export const MagazinePlug = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 3fr;
  grid-gap: 2rem;

  padding-left: 10%;
  padding-top: 7rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 5fr 2fr 2fr;
  }
`

export const Content = styled.div`
  position: relative;

  max-width: 23rem;
`

export const ContentHighlight = styled(UI.Detail)`
  margin-bottom: 0.5rem;
`

export const ContentTitle = styled(UI.Title)`
  margin-bottom: 2rem;

  @media only screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`

export const ContentDescription = styled.div``

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
  width: 400px;
  height: 300px;
  background: url(${magazine});
`

export const AsteriskShape = styled(Asterisk)`
  position: absolute;
  top: 30%;
  left: -4rem;

  z-index: -1;
`
