import styled from '../../theme'
import { Link as GatsbyLink } from 'gatsby'

export const Wrapper = styled.div`
  position: fixed;

  margin-bottom: 2rem;
  padding: 1.5rem 10%;
  width: 100%;
  z-index: 99;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1440px;
`

export const Link = styled(GatsbyLink)`
  color: black;
  text-decoration: none;
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div:not(:last-child) {
    margin-right: 2rem;
  }

  svg {
    margin-left: 6rem;
  }
`
