import { Typography, Container, styled } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // TODO
  paddingTop: theme.spacing(10),
}))

const UnauthorizedPage: React.FC = () => {
  return (
    <StyledContainer>
      <Typography component="p">
        You don't have permission to view this content.{' '}
        <Link href="/">Click here</Link> to redirect to home.
      </Typography>
    </StyledContainer>
  )
}

export default UnauthorizedPage
