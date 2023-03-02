import * as React from 'react'
import { Box } from '@mui/material'
import MUIModal from '@mui/material/Modal'
import { ModalProps } from '@/interfaces/modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};


const Modal: React.FC<ModalProps> = ({ isOpen, modalContent }) => {
  return (
    <MUIModal
      open={isOpen}
      aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={style}>
        {modalContent}
      </Box>
    </MUIModal>
  )
}

export default Modal
