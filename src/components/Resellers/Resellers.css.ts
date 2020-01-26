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

  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`

export const Gallery = styled.div`
  margin-top: 60px;

  height: 600px;
  width: 476px;

  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const GalleryHolder = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;

    margin-bottom: 60px;
  }
`

export const GalleryControls = styled(Flex)`
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`

export const Control = styled.div`
  cursor: pointer;
`

export const Column = styled(BoxStyled)`
  min-width: 300px;
  max-width: 400px;
  width: 100%;

  margin-bottom: 32px;

  &:nth-child(2) {
    margin-top: 100px;
    padding: 0px 70px;

    min-width: 140px;
    padding-right: 32px;
  }

  &:nth-child(3) {
    flex-direction: column;
    justify-content: flex-end;

    div:first-of-type {
      margin-bottom: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    &:nth-child(2) {
    }
  }
`

export const Resellers = styled(BoxStyled)`
  cursor: pointer;
  display: block;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`

export const Heading = styled(HeadingStyled)`
  margin-bottom: 12px;
`

export const Kicker = styled(KickerStyled)`
  margin-bottom: 4px;
`

export const ResellerHolder = styled.div`
  display: inline-block;
  position: relative;
`

export const ResellerName = styled(HeadingStyled)<{ isSelected: boolean }>`
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::before {
        content: '';
        height: 1px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.foreground};
        position: absolute;
        bottom: -3px;
        left: 0px;

        transition: ${({ theme }) => theme.transitions.cubic()};
      }

      &:hover {
        &::before {
          width: 60%;
        }
      }
    `}
`
