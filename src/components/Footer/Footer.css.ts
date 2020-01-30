import styled from 'styled-components'
import { Box, Flex, Subtitle as SubtitleStyled } from '../UI/index'

import decoration from '../../assets/images/decorative-dots.jpg'

export const Footer = styled(Flex)`
  justify-content: space-between;
  padding: 70px;

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
  justify-content: space-between;

  padding-top: 50px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Section = styled(Box)`
  p:first-of-type {
    margin-bottom: 22px;
  }

  margin-right: 32px;
  margin-bottom: 32px;

  @media only screen and (max-width: 768px) {
    margin-right: 16px;
  }
`
