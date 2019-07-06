import { css } from './styled'
import typography from './typography'

export default css`
  ${typography}

  body {
    font-family: 'Founders Grotesk', sans-serif;
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.background};
  }

  body,
  input,
  button,
  select {
    font-family: 'Founders Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`
