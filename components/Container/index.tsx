import { Container as MuiContainer } from '@mui/material'
import * as React from 'react'

const Container = ({ children, maxWidth = 'md', sx = {} }: { children: any, maxWidth: any, sx: any }) => {
  console.log(maxWidth)
  return (
    <MuiContainer sx={sx} maxWidth={maxWidth} >{children}</MuiContainer>
  )
}

export default Container
