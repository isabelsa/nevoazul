import styled from 'styled-components'

import * as UI from '../../UI/index'

export const Hero = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  position: relative;

  padding: 190px 70px 70px;

  @media only screen and (max-width: 768px) {
    padding: 190px 30px 30px;
  }

  @media only screen and (max-width: 425px) {
    padding: 180px 16px 16px;
  }
`

export const Kicker = styled(UI.Kicker)`
  margin-bottom: 8px;
`

export const Title = styled(UI.Title)`
  margin-bottom: 32px;
  max-width: 525px;
`

export const Text = styled(UI.Body)`
  &:first-of-type {
    margin-right: 24px;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 48rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: 100%;
  max-width: 418px;

  &:first-of-type {
    max-width: 300px;
  }

  @media only screen and (max-width: 768px) {
    max-width: none;
    width: 100%;

    &:first-of-type {
      max-width: none;
      margin-bottom: 20px;
    }
  }
`
