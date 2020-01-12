import styled, { css } from 'styled-components'

export const base = css``

export const CaptionNumber = styled.p`
  font-size: 14px;
  line-height: 18px;

  text-transform: uppercase;
`
export const Caption = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 14px;
  line-height: 24px;
`

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.06rem;
  line-height: 1.5rem;

  color: #5a5a5c;
`

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

export const Kicker = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 17px;
  line-height: 24px;

  font-style: italic;
`

export const Text = styled.p`
  font-size: 17px;
  line-height: 26.4px;
`

export const Body = styled.p`
  font-size: 17px;
  line-height: 26px;
`

export const TextSerif = styled.p<{ italic?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 17px;
  line-height: 1.65rem;

  font-style: ${p => (p.italic ? 'italic' : 'normal')};
`

export const Heading = styled.p<{ italic?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 22px;
  line-height: 1.65rem;

  font-style: ${p => (p.italic ? 'italic' : 'normal')};
`

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.5rem;
  line-height: 2.125rem;
`

export const Display = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 3rem;
  line-height: 3.75rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.8rem;
  }
`

export const DisplayItalic = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 3rem;
  line-height: 3.75rem;
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2.25rem;
  line-height: 2.85rem;
`
