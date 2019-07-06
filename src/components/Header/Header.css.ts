import styled from '../../theme'
import { Link as GatsbyLink } from 'gatsby'

const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  transition: background-color 0.2s ease;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 1175px;
  padding: 1.45rem 1.0875rem;
`

const Link = styled(GatsbyLink)`
  color: black;
  text-decoration: none;
`

export { Wrapper, Content, Link }
