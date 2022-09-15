import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import theme from '../../assets/theme';
import { devices } from '../../assets/devices';

const Contact = () => (
  <Box
    paddingTop={5}
    paddingBottom={10}
    paddingX={5}
    sx={{
      [devices.mobile]: {
        padding: '80px 24px',
      },
    }}
  >
    <Box textAlign="center">
      <Typography
        variant="body1"
        mb={1}
        fontWeight={700}
        color={theme.palette.primary.main}
      >
        Informação
      </Typography>
      <Typography
        variant="h4"
        textTransform="uppercase"
        mb={3}
        fontWeight={700}
        sx={{ letterSpacing: '8px' }}
      >
        Contatos
      </Typography>
    </Box>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          textAlign="center"
          padding={4}
          mt={4}
          borderRadius={2}
          boxShadow="2px 0px 9px 1px rgba(82, 90, 101, 0.1)"
          borderLeft="2px solid rgb(123, 104, 238)"
        >
          <Typography variant="h6" mb={1} fontWeight={700}>
            Whatsaap
          </Typography>

          <Typography variant="body2" mb={2}>
            Lorem ipsum interdum aliquam
          </Typography>
          <Typography mb={0.5} fontWeight={700}>
            0800 9999-9999
          </Typography>
          <Typography mb={0.5} fontWeight={700}>
             Link
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          textAlign="center"
          padding={4}
          mt={4}
          borderRadius={2}
          boxShadow="2px 0px 9px 1px rgba(82, 90, 101, 0.1)"
          borderLeft="2px solid rgb(123, 104, 238)"
        >
          <Typography variant="h6" mb={1} fontWeight={700}>
             Email
          </Typography>

          <Typography variant="body2" mb={2}>
            Lorem ipsum interdum aliquam
          </Typography>
          <Typography mb={0.5} fontWeight={700}>
          steinlesofc@gmail.com
          </Typography>
          <Typography mb={0.5} fontWeight={700}>
            Link
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          textAlign="center"
          padding={4}
          mt={4}
          borderRadius={2}
          boxShadow="2px 0px 9px 1px rgba(82, 90, 101, 0.1)"
          borderLeft="2px solid rgb(123, 104, 238)"
        >
          <Typography variant="h6" mb={1} fontWeight={700}>
            Instagram
          </Typography>

          <Typography variant="body2" mb={2}>
            Lorem ipsum interdum aliquam
          </Typography>
          <Typography mb={0.5} fontWeight={700}>
            @steinlessofc
          </Typography>
          <Typography mb={0.5} fontWeight={700}>
            Link
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Contact;
