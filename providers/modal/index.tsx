/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import Modal from '@/components/Modal'
import { ModalContext } from '@/context/modal'

const ModalProvider = ({ children }: any) => {
  const [isOpen, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState<React.ReactNode | string>('')

  const showModal = () => {
    setOpen(true)
  }

  const hideModal = () => {
    setOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        setModalContent
      }}
    >
      {children}
      <Modal
        isOpen={isOpen}
        modalContent={modalContent}
      />
    </ModalContext.Provider>
  )
}

export default ModalProvider
