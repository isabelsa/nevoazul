import React from 'react'
import { Button, Text, Title, Detail } from '../UI'

import * as S from './Cart.css'

type CartItemProps = {
  item: {
    image: string
    title: string
    price: string
  }
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div>
      <p>{item.image}</p>
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
  )
}

const Cart = () => {
  const cartItems = [
    {
      title: 'Nevoazul #2',
      price: 'Nevoazul #2',
      image: 'cena',
    },
    {
      title: 'Nevoazul #1',
      price: 'Nevoazul #2',
      image: 'cena',
    },
  ]

  return (
    <S.Cart>
      <Detail>Items no carrinho</Detail>
      <Title>O teu carrinho</Title>
      {cartItems.map(item => {
        return <CartItem item={item} />
      })}
      <S.CartTotal>
        <Text>Total</Text>
        <Text>Value</Text>
      </S.CartTotal>
      <Button>Comprar</Button>
    </S.Cart>
  )
}

export default Cart
