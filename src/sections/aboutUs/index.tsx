import React, { useState, useEffect, useRef } from 'react';
import { Box, LinearProgress, Typography, Grid } from '@mui/material';
import { devices } from '../../assets/devices';
import theme from '../../assets/theme';
import useVisibility from '../../hooks/useVisibility';

const AboutUs = ({ innerRef }: any) => {
  const ref = useRef();
  const [isVisible, getProgress] = useVisibility(ref);
  const [progressDesign, setProgressDesign] = useState(0);
  const [progressDevelopment, setProgressDevelopment] = useState(0);
  const [progressMarketing, setProgressMarketing] = useState(0);
  const valuesServices = { design: 95, development: 80, marketing: 70 };

  useEffect(() => {
    getProgress(setProgressDesign, valuesServices.design);
    getProgress(setProgressDevelopment, valuesServices.development);
    getProgress(setProgressMarketing, valuesServices.marketing);
  }, [isVisible]);

  return (
    <Box
      ref={innerRef}
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
        <Grid item xs={12} md={4}>
          <Box
            ref={ref}
            paddingX={1}
            sx={{
              [devices.mobile]: {
                marginBottom: 2,
              },
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={1}>
              Nossa missão
            </Typography>
            <Typography variant="body2">
              Nossa missão é proporcionar para sua empresa softwares de qualidade alta.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            paddingX={1}
            sx={{
              [devices.mobile]: {
                marginBottom: 2,
              },
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={1}>
              Nosso time
            </Typography>
            <Typography variant="body2">
                Nosso time é composto por desenvolvedores qualificados
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box paddingX={1}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Nossas skills
            </Typography>

            <Box mb={2}>
              <Box mb={0.5} display="flex" justifyContent="space-between">
                <Typography
                  variant="caption"
                  fontWeight={700}
                  color={theme.palette.primary.main}
                >
                  Design
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  color={theme.palette.primary.main}
                >
                  {valuesServices.design}%
                </Typography>
              </Box>
              <LinearProgress variant="determinate" value={progressDesign} />
            </Box>

            <Box mb={2}>
              <Box mb={0.5} display="flex" justifyContent="space-between">
                <Typography
                  variant="caption"
                  fontWeight={700}
                  color={theme.palette.primary.main}
                >
                  Development
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  color={theme.palette.primary.main}
                >
                  {valuesServices.development}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progressDevelopment}
              />
            </Box>

            <Box>
              <Box mb={0.5} display="flex" justifyContent="space-between">
                <Typography
                  variant="caption"
                  fontWeight={700}
                  color={theme.palette.primary.main}
                >
                  Marketing
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  color={theme.palette.primary.main}
                >
                  {valuesServices.marketing}%
                </Typography>
              </Box>
              <LinearProgress variant="determinate" value={progressMarketing} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
