import styled from '../../theme'
import { Link as GatsbyLink } from 'gatsby'

export const Wrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  max-width: 1440px;

  margin-bottom: 2rem;
  padding: 2.2rem 4% 1.5rem 4%;

  z-index: 99;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Link = styled(GatsbyLink)`
  color: black;
  text-decoration: none;
`

export const DesktopNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex: 1;
  min-width: -webkit-min-content;

  div:not(:last-child) {
    margin-right: 1.5rem;
  }

  svg {
    margin-left: 3rem;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Hamburger = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`

export const MobileNavLinks = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100%;

  padding: 6rem 4%;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
