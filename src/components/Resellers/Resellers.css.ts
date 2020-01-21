import styled, { css } from 'styled-components'

import {
  Flex,
  Box as BoxStyled,
  Heading as HeadingStyled,
  Kicker as KickerStyled,
} from '../UI/'

export const Wrapper = styled(Flex)`
  width: 100%;

  padding: 40px 70px;
`

export const Gallery = styled.div`
  margin-top: 60px;

  height: 600px;
  width: 476px;

  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;
`

export const GalleryControls = styled(Flex)`
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`

export const Column = styled(BoxStyled)`
  width: 100%;
  max-width: 416px;

  margin-bottom: 32px;

  &:nth-child(2) {
    margin-top: 100px;
    padding: 0px 70px;
  }

  &:nth-child(3) {
    flex-direction: column;
    justify-content: flex-end;

    div:first-of-type {
      margin-bottom: 40px;
    }
  }
`

export const Resellers = styled(BoxStyled)<{ isSelected: boolean }>`
  cursor: pointer;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      text-decoration: underline;
    `}
`

export const Heading = styled(HeadingStyled)`
  margin-bottom: 12px;
`

export const Kicker = styled(KickerStyled)`
  margin-bottom: 4px;
`
