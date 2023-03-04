/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { UIContext } from '@/context/ui'

const UIProvider = ({ children }: any) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false)
  const [cart, setCart] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
    cart,
    setCart,
    showCart,
    setShowCart
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export default UIProvider
