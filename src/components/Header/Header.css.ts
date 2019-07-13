import styled from '../../theme'
import { Link as GatsbyLink } from 'gatsby'

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  transition: background-color 0.2s ease;
  position: sticky;
  z-index: 99;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0rem;
`

export const Link = styled(GatsbyLink)`
  color: black;
  text-decoration: none;
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
