import React from 'react'
import { useLoading } from '@/context/loading'
import { Backdrop, CircularProgress } from '@mui/material'

const Loading: React.FC = () => {
  const { loading } = useLoading()
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.common.white,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loading}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  )
}

export default Loading
