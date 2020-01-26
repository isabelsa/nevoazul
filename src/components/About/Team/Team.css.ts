import styled from 'styled-components'
import { Flex, Box, Text } from '../../UI/index'

export const Wrapper = styled(Flex)`
  padding: 160px 10%;

  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    padding: 90px 20px;
    flex-wrap: wrap;
  }
`

export const Description = styled(Text)`
  margin-bottom: 66px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const DescriptionWrapper = styled(Box)`
  width: 100%;
  max-width: 376px;

  margin-bottom: 66px;
`

export const TeamHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 90px;

  padding: 134px 60px;

  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(1, 1fr);

    padding: 134px 20px 0px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const TeamMember = styled(Box)`
  p:first-of-type {
    margin-bottom: 8px;
  }
`
