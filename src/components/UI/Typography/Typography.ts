import styled, { css } from 'styled-components'

export const base = css``

export const Detail = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  letter-spacing: 0.01rem;

  text-transform: uppercase;
`

export const TextSmall = styled.p`
  font-size: 0.9rem;
  line-height: 1.4rem;
`

export const Text = styled.p`
  font-size: 1.05rem;
  line-height: 25px;
`

export const Display = styled.h1`
  font-family: 'Copernicus';
  font-size: 3rem;
  line-height: 3.75rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.8rem;
  }
`

export const DisplayItalic = styled.h1`
  font-family: 'Copernicus';
  font-style: italic;
  font-size: 3rem;
  line-height: 3.75rem;
`

export const Title = styled.p`
  font-family: 'Copernicus';
  font-size: 2.25rem;
  line-height: 2.85rem;
`
