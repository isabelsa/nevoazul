import styled from 'styled-components'
import { Detail as DetailStyled } from '../index'

export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.background};
  padding: 0.6rem 0;
  font-size: 1rem;
`

export const Detail = styled(DetailStyled)`
  margin-bottom: 0.4rem;
`
