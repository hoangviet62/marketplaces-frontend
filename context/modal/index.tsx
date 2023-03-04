import { useContext, createContext } from 'react'

export type ModalContextType = {
  hideModal: () => void
  showModal: () => void
  setModalContent: (content: React.ReactNode | string) => void
}

const defaultHideModal = () => {
  return
}
const defaultShowModal = () => {
  return
}

const defaultSetModalContent = () => {
  return
}

export const ModalContext = createContext<ModalContextType>({
  hideModal: defaultHideModal,
  showModal: defaultShowModal,
  setModalContent: defaultSetModalContent,
})

export const useModal = () => useContext(ModalContext)
