import * as React from 'react';
import { Link, styled, Box, Typography } from '@mui/material';

const TermLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'underline'
}));

const FooterDiv = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
}));

const Footer = () => {
  return (
    <FooterDiv id="footer" component="div">
      <Typography variant="body1">
        © {new Date().getFullYear() + ' '}
        All rights reserved. See our&nbsp;
        <TermLink href="#">Terms And Conditions</TermLink>,&nbsp;
        <TermLink href="#">Terms and Conditions of Sale</TermLink>&nbsp;and&nbsp;<TermLink href="#">Privacy Policy</TermLink>
      </Typography>
    </FooterDiv>
  )
}

export default Footer