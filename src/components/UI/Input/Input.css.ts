import styled from 'styled-components'

export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.light};

  font-size: 1rem;
`
