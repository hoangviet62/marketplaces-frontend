/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container as MuiContainer } from '@mui/material'
import * as React from 'react'

const Container = ({ children, maxWidth }: { children: any, maxWidth?: string }) => {
  const props: any = {}
  if (maxWidth) props.maxWidth = maxWidth

  return (
    <MuiContainer sx={{ p: 5 }} {...props}>
      {children}
    </MuiContainer>
  )
}

export default Container
