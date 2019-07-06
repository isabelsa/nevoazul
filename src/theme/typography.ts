import { css } from 'styled-components'

import FoundersGroteskRegular from './fonts/FoundersGroteskRegular.otf'
import FoundersGroteskMedium from './fonts/FoundersGroteskMedium.otf'

const typography = css`
  @font-face {
    font-display: auto;
    font-family: 'Founders Grotesk';
    font-weight: 400;
    font-style: normal;
    src: url(${FoundersGroteskRegular}) format('otf');
  }

  @font-face {
    font-display: auto;
    font-family: 'Founders Grotesk';
    font-weight: 600;
    font-style: medium;
    src: url(${FoundersGroteskMedium}) format('otf');
  }
`

export default typography
