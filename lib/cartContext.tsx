"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item]
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      return updatedCart
    })
  }

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== itemId)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      return updatedCart
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}

