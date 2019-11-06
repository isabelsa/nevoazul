import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from '@/theme'
// import Banner from '@/components/Banner/Banner'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CartProvider from '@/components/Providers/CartProvider'

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
          <CartProvider>
            {/* <Banner /> */}
            <Header siteTitle={data.site.siteMetadata.title} />
            <Content>{children}</Content>
            <Footer />
          </CartProvider>
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
