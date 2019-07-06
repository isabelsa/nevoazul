import { css } from 'styled-components'

import CopernicusBook from './fonts/CopernicusBook.otf'
import WhyteBook from './fonts/WhyteBook.otf'

const typography = css`
  @font-face {
    font-display: auto;
    font-family: 'Copernicus';
    font-weight: 400;
    font-style: normal;
    src: url(${CopernicusBook}) format('otf');
  }

  @font-face {
    font-display: auto;
    font-family: 'Whyte';
    font-weight: 600;
    font-style: normal;
    src: url(${WhyteBook}) format('otf');
  }
`

export default typography
