import React from 'react'
import 'wipe.css'

import styled, {
  css,
  createGlobalStyle,
  keyframes,
  StyledThemeProvider,
} from './styled'
import { media } from './breakpoints'
import style from './style'
import theme from './theme'
import typography from './typography'

/** Global styles */
const GlobalStyle = createGlobalStyle`
  ${typography}
  ${style}
`

/** Theme Provider */
const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  )
}

export { theme, ThemeProvider, keyframes, css, media }

export default styled
