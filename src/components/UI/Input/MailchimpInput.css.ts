import styled from 'styled-components'
import {
  Detail as DetailStyled,
  ArrowRight as ArrowRightStyled,
} from '../index'

export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`

export const Input = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.background};
  padding: 0.6rem 0;
  font-size: 1rem;
`

export const Detail = styled(DetailStyled)`
  margin-bottom: 0.4rem;
`

export const Button = styled.button`
  position: absolute;
  bottom: 8px;
  right: 0;
`

export const ArrowRight = styled(ArrowRightStyled)``
