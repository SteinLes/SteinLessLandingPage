import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  QueryBuilder,
  GroupAdd,
  RocketLaunch,
  EmojiEvents,
} from '@mui/icons-material';
import background from '../../assets/images/fundo.jpg';
import theme from '../../assets/theme';
import { devices } from '../../assets/devices';
import useVisibilty from '../../hooks/useVisibility';

const Achievements = ({ innerRef }: any) => {
  const ref = useRef();
  const [isVisible, getProgress] = useVisibilty(ref);
  const [progressHours, setProgressHours] = useState(0);
  const [progressClients, setProgressClients] = useState(0);
  const [progressProjects, setProgressProjects] = useState(0);
  const [progressAwards, setProgressAwards] = useState(0);

  useEffect(() => {
    getProgress(setProgressHours, 600);
    getProgress(setProgressClients, 2);
    getProgress(setProgressProjects, 2,);
    getProgress(setProgressAwards, 100);
  }, [isVisible]);

  return (
    <Box
      ref={innerRef}
      paddingX={2}
      paddingY={12}
      textAlign="center"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box ref={ref}>
        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              [devices.mobile]: {
                marginBottom: 2,
              },
            }}
          >
            <QueryBuilder
              sx={{ fontSize: '48px', color: theme.palette.text.disabled }}
            />
            <Typography
              mt={0.5}
              variant="h5"
              textTransform="uppercase"
              fontWeight={700}
              color={theme.palette.text.disabled}
            >
              {Math.round(progressHours)}
            </Typography>
            <Typography
              variant="caption"
              textTransform="uppercase"
              letterSpacing="2px"
              color={theme.palette.text.secondary}
            >
              Horas trabalhadas
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              [devices.mobile]: {
                marginBottom: 2,
              },
            }}
          >
            <GroupAdd
              sx={{ fontSize: '48px', color: theme.palette.text.disabled }}
            />
            <Typography
              mt={0.5}
              variant="h5"
              textTransform="uppercase"
              fontWeight={700}
              color={theme.palette.text.disabled}
            >
              {Math.round(progressClients)}
            </Typography>
            <Typography
              variant="caption"
              textTransform="uppercase"
              letterSpacing="2px"
              color={theme.palette.text.secondary}
            >
              Clientes
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              [devices.mobile]: {
                marginBottom: 2,
              },
            }}
          >
            <RocketLaunch
              sx={{ fontSize: '48px', color: theme.palette.text.disabled }}
            />
            <Typography
              mt={0.5}
              variant="h5"
              textTransform="uppercase"
              fontWeight={700}
              color={theme.palette.text.disabled}
            >
              {Math.round(progressProjects)}
            </Typography>
            <Typography
              variant="caption"
              textTransform="uppercase"
              letterSpacing="2px"
              color={theme.palette.text.secondary}
            >
              Projetos
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              [devices.mobile]: {
                marginBottom: 2,
              },
            }}
          >
            <EmojiEvents
              sx={{ fontSize: '48px', color: theme.palette.text.disabled }}
            />
            <Typography
              mt={0.5}
              variant="h5"
              textTransform="uppercase"
              fontWeight={700}
              color={theme.palette.text.disabled}
            >
              {Math.round(progressAwards)}
            </Typography>
            <Typography
              variant="caption"
              textTransform="uppercase"
              letterSpacing="2px"
              color={theme.palette.text.secondary}
            >
              Conquistas
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Achievements;
