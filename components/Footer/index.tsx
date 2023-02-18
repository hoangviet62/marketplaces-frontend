import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Link, styled, Toolbar, BottomNavigation, Paper, BottomNavigationAction, Typography } from '@mui/material';

const TermLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'underline'
}));

const Footer = () => {
  return (
    <div id="footer">
      <AppBar sx={{ alignItems: 'center', position: 'absolute' }}>
        <Toolbar>
          <Typography variant="body1" component="div">
            © {new Date().getFullYear() + ' '}
            All rights reserved. See our&nbsp;
            <TermLink href="#">Terms And Conditions</TermLink>,&nbsp;
            <TermLink href="#">Terms and Conditions of Sale</TermLink>&nbsp;
            and <TermLink href="#">Privacy Policy</TermLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div >

  )
}

export default Footer