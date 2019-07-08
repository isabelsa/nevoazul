import { css } from './styled'
import typography from './typography'

export default css`
  ${typography}

  body {
    font-family: 'Untitled Sans', sans-serif;
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1 {
    font-family: 'Copernicus', serif;
  }

  body,
  input,
  button,
  select {
    font-family: 'Untitled Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`
