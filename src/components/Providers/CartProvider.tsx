// @flow

/* global localStorage */
// Localnly used client-side

import * as React from 'react'

type ID = string
type Quantity = number

type Item = {
  id: ID
  quantity: Quantity
}

type Cart = {
  [key: ID]: Quantity
}

type CartContextType =
  | {
      loading: boolean
      cart: Cart
      addItem: (item: Item) => void
      removeItem: (id: ID) => void
      updateCart: (cart: Cart) => void
      resetCart: () => void
    }
  | {}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = React.createContext<CartContextType>({})

const useCartPersistance = (cart: Cart, setCart: (cart: Cart) => void) => {
  React.useEffect(() => {
    const localStorageCart = localStorage.getItem('NEVOA_CART')

    if (localStorageCart) {
      setCart(JSON.parse(localStorageCart))
    }
  }, [setCart])

  // Save in local storage
  React.useEffect(() => {
    localStorage.setItem('NEVOA_CART', JSON.stringify(cart))
  }, [cart])
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = React.useState<Cart>({})
  useCartPersistance(cart, setCart)

  const addItem = (item: Item) => {
    const newCart = {
      ...cart,
      [item.id]: (cart[item.id] || 0) + item.quantity,
    }

    setCart(newCart)
  }

  const removeItem = (id: ID) => {
    const { [id]: _, ...newCart } = cart

    setCart(newCart)
  }

  const updateCart = (newCart: Cart) => {
    setCart(newCart)
  }

  const resetCart = () => {
    setCart({})
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateCart, resetCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
