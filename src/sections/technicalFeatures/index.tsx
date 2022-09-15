import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Language, Laptop, Code } from '@mui/icons-material';
import { devices } from '../../assets/devices';

const TechnicalFeatures = () => (
  <Box
    paddingY={10}
    paddingX={5}
    display="flex"
    justifyContent="space-between"
    flexWrap="wrap"
    sx={{
      [devices.mobile]: {
        padding: '80px 24px',
      },
    }}
  >
    <Grid container>
      <Grid item md={4} xs={12}>
        <Box
          textAlign="center"
          sx={{
            [devices.mobile]: {
              marginBottom: '24px',
            },
          }}
        >
          <Laptop sx={{ fontSize: '32px' }} />
          <Typography fontWeight={700} mt={1} mb={2}>
            Tecnologia
          </Typography>
          <Typography variant="body2">
            Usamos tecnologia de ponta em nossos softwares
          </Typography>
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box
          textAlign="center"
          sx={{
            [devices.mobile]: {
              marginBottom: '24px',
            },
          }}
        >
          <Language sx={{ fontSize: '32px' }} />
          <Typography fontWeight={700} mt={1} mb={2}>
            Segurança
          </Typography>
          <Typography variant="body2">
            Sites seguros anti-hackers
          </Typography>
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box textAlign="center">
          <Code sx={{ fontSize: '32px' }} />
          <Typography fontWeight={700} mt={1} mb={2}>
            Design
          </Typography>
          <Typography variant="body2">
            Designs modernos
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default TechnicalFeatures;
