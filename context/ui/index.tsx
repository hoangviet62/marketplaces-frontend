import { useContext, createContext } from 'react'

export type UIContextType = {
  drawerOpen: boolean
  setDrawerOpen: (status: boolean) => void
  showSearchBox: boolean
  setShowSearchBox: (status: boolean) => void
  cart: boolean
  setCart: (status: boolean) => void
  showCart: boolean
  setShowCart: (status: boolean) => void
}

const defaultSetDrawerOpen = () => {
  return
}
const defaultSetShowSearchBox = () => {
  return
}

const defaultSetCart = () => {
  return
}
const defaultSetShowCart = () => {
  return
}

export const UIContext = createContext<UIContextType>({
  drawerOpen: false,
  setDrawerOpen: defaultSetDrawerOpen,
  showSearchBox: false,
  setShowSearchBox: defaultSetShowSearchBox,
  cart: false,
  setCart: defaultSetCart,
  showCart: false,
  setShowCart: defaultSetShowCart
})

export const useUIContext = () => useContext(UIContext)
