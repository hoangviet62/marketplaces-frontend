/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container as MuiContainer } from '@mui/material'
import * as React from 'react'

const Container = ({ children, maxWidth }: { children: any, maxWidth?: string }) => {
  const props: any = {}
  if (maxWidth) props.maxWidth = maxWidth

  return (
    maxWidth === "none" ?
    <Box sx={{p: 2, mb: 5}}>{children}</Box> :
    <MuiContainer sx={{ p: 5 }} {...props}>
      {children}
    </MuiContainer>
  )
}

export default Container
