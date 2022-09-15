import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';

const Footer = () => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    padding={2}
    sx={{ backgroundColor: '#3A3A3A' }}
  >
    <img src={logo} alt="Logo" style={{ maxWidth: '150px' }} />
    <Typography variant="caption">
      © {new Date().getFullYear()} SteinLess.
    </Typography>
  </Box>
);

export default Footer;
