import * as React from 'react'
import Box from '@mui/material/Box'
import MUIModal from '@mui/material/Modal'
import { ModalProps } from '@/interfaces/modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Modal: React.FC<ModalProps> = ({ isOpen, modalContent }) => {
  return (
    <div>
      <MUIModal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{modalContent}</Box>
      </MUIModal>
    </div>
  )
}

export default Modal
