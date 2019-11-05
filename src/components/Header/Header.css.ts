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
  padding: 1.5rem 10%;

  z-index: 99;
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

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex: 1;
  min-width: -webkit-min-content;

  div:not(:last-child) {
    margin-right: 1rem;
  }

  svg {
    margin-left: 3rem;
  }
`
