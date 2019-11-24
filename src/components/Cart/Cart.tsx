import React from 'react'
import { CartContext } from '../Providers/CartProvider'
import { Button, Text, Title, Detail } from '../UI'

import * as S from './Cart.css'

type CartItemProps = {
  item: {
    image: string
    title: string
    price: string
  }
}

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
  const cena = React.useContext(CartContext)

  console.log('CART ->', cena)

  const handleCartUpdate = () => {
    return null
  }

  return (
    <S.Cart>
      <Detail>Items no carrinho</Detail>
      <Title>O teu carrinho</Title>
      {cartItems.map(item => {
        return <CartItem item={item} />
      })}
      <div>
        <button onClick={() => handleCartUpdate()}>-</button>
        <button onClick={() => handleCartUpdate()}>+</button>
      </div>
      <S.CartTotal>
        <Text>Total</Text>
        <Text>Value</Text>
      </S.CartTotal>
      <Button>Comprar</Button>
    </S.Cart>
  )
}

export default Cart
