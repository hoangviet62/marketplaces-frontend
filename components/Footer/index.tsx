import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Link, styled, Toolbar, BottomNavigation, Paper, BottomNavigationAction, Typography } from '@mui/material';

const TermLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'underline'
}));

const Footer = () => {
  return (
    <AppBar sx={{ alignItems: 'center' }} position="sticky" component="footer">
      <Toolbar sx={{ height: 56 }}>
        <Typography variant="caption" component="div">
          © {new Date().getFullYear()} All rights reserved. See our &nbsp; <TermLink href="#">Terms And Conditions</TermLink>, &nbsp;<TermLink href="#">Terms and Conditions of Sale</TermLink> &nbsp;and&nbsp; <TermLink href="#">Privacy Policy</TermLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer