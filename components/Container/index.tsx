import { InputProps } from '@/interfaces/input-props'
import { Container as MuiContainer } from '@mui/material'
import * as React from 'react'

const Container: React.FC<InputProps> = ({ children, maxWidth = 'md' }) => {
  return (
    <MuiContainer sx={{ p: 5 }} maxWidth={maxWidth}>{children}</MuiContainer>
  )
}

export default Container
