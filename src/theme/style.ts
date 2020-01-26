import { css } from './styled'
import typography from './typography'

export default css`
  ${typography}

  body {
    font-family: 'Untitled Sans', sans-serif;
    color: ${({ theme }) => theme.colors.foreground};
    width: 100%;
    height: 100%;

    overflow-x: hidden;
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

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
