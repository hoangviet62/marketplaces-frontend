import { ContainerProps } from '@/interfaces/container-props'
import { Container as MuiContainer } from '@mui/material'
import * as React from 'react'

const Container: React.FC<ContainerProps> = ({ children, maxWidth = 'md' }) => {
  return (
    <MuiContainer sx={{ p: 5 }} maxWidth={maxWidth}>
      {children}
    </MuiContainer>
  )
}

export default Container
