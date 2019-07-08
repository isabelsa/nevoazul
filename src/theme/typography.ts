import { css } from 'styled-components'

import CopernicusBookEot from './fonts/Copernicus-Book.eot'
import CopernicusBookWoff from './fonts/Copernicus-Book.woff'
import CopernicusBookWoff2 from './fonts/Copernicus-Book.woff2'

import UntitledSansEot from './fonts/UntitledSansWeb-Regular.eot'
import UntitledSansWoff from './fonts/UntitledSansWeb-Regular.woff'
import UntitledSansWoff2 from './fonts/UntitledSansWeb-Regular.woff2'

const typography = css`
  @font-face {
    font-display: auto;
    font-family: 'Copernicus';
    font-weight: 400;
    font-style: normal;
    src: url(${CopernicusBookEot}) format('eot'),
      url(${CopernicusBookWoff}) format('woff'),
      url(${CopernicusBookWoff2}) format('woff2');
  }

  @font-face {
    font-display: auto;
    font-family: 'Untitled Sans';
    font-weight: 600;
    font-style: normal;
    src: url(${UntitledSansEot}) format('eot'),
      url(${UntitledSansWoff}) format('woff'),
      url(${UntitledSansWoff2}) format('woff2');
  }
`

export default typography
