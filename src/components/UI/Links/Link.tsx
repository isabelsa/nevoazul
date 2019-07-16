import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import AnchorLink from './AnchorLink/AnchorLink.css'

interface ILinkProps {
  to: string
  children: React.ReactNode
}

const Link = ({ to, children, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  const external = /^http/.test(to)

  if (internal) {
    return null
  }

  if (external) {
    return null
  }

  return (
    <AnchorLink href={to} {...rest}>
      {children}
    </AnchorLink>
  )
}

export default Link
