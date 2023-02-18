import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Link, styled, Toolbar } from '@mui/material';

const TermLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'underline'
}));

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ alignItems: 'center' }} position="static">
        <Toolbar sx={{ height: 56 }}>
          © {new Date().getFullYear()} All rights reserved. See our &nbsp; <TermLink href="#">Terms And Conditions</TermLink>, &nbsp;<TermLink href="#">Terms and Conditions of Sale</TermLink> &nbsp;and&nbsp; <TermLink href="#">Privacy Policy</TermLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer