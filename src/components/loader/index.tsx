import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => (
  <Box
    width="100%"
    height="100vh"
    position="absolute"
    zIndex={99}
    top={0}
    left={0}
    sx={{
      background: 'linear-gradient(148.25deg, #3A3A3A 3%, #585858 79.85%)',
    }}
  >
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress style={{ color: '#3498DB' }} />
    </Box>
  </Box>
);

export default Loader;
