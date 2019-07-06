import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from '@/theme'
import Header from '@/components/Header/Header'

import { Content } from './layout.css'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <ThemeProvider>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            {children}
            <footer></footer>
          </Content>
        </ThemeProvider>
      )}
    />
  )
}

export default Layout

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
