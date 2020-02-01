import styled from 'styled-components'
import {
  Box,
  Flex,
  Subtitle as SubtitleStyled,
  TextSerif as TextSerifStyled,
} from '../UI/index'

import decoration from '../../assets/images/decorative-dots.jpg'

export const Footer = styled(Flex)`
  justify-content: space-between;
  padding: 90px 70px 70px 70px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    padding: 40px;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;

    padding: 24px;
  }
`

export const SubtitleHolder = styled.div`
  position: relative;
`

export const SubtitleDecoration = styled.div`
  position: absolute;
  top: -28px;

  background-image: url(${decoration});
  background-size: cover;

  width: 70px;
  height: 30px;
`

export const Subtitle = styled(SubtitleStyled)`
  margin-bottom: 8px;
`

export const FooterIntro = styled.div`
  width: 100%;
  max-width: 445px;
  margin-right: 80px;
`

export const Sections = styled(Flex)`
  width: 100%;

  padding-top: 6px;

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    flex-wrap: wrap;
  }
`

export const Section = styled(Box)`
  margin-right: 64px;
  margin-bottom: 32px;

  @media only screen and (max-width: 768px) {
    margin-right: 16px;
  }
`

export const TextSerif = styled(TextSerifStyled)`
  margin-bottom: 8px;
`
