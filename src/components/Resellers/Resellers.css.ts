import styled from 'styled-components'

import { Flex } from '../UI/'

export const Wrapper = styled(Flex)`
  width: 100%;

  padding: 40px;
`

export const Gallery = styled.div`
  margin-top: 80px;

  height: 600px;
  width: 476px;

  background-color: ${({ theme }) => theme.colors.blue.default};
  background-image: url('https://images.unsplash.com/photo-1492252719637-c7b68468489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 416px;
`
