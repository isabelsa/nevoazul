// @flow

/* global localStorage */
// Localnly used client-side

import * as React from 'react'

type Cart = Array<{}>

type CartContextType = {
  loading: boolean
  cart: Cart
  addItem: () => void
  removeItem: () => void
  updateCart: () => void
  resetCart: () => void
}

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

  const addItem = () => {}

  const removeItem = () => {
    setCart({})
  }

  const updateCart = () => {
    setCart({})
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
