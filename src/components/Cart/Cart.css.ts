import styled from 'styled-components'

export const Cart = styled.div`
  display: flex;
  flex-direction: column;

  width: 27rem;

  background-color: ${({ theme }) => theme.colors.background};
`

export const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
