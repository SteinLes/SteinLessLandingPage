import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    text: {
      primary: 'withe',
      secondary: 'white',
      disabled: 'white',
    },
    primary: {
      light: '#2471A3',
      main: '#2471A3',
    },
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: 'white',
          position: 'inherit',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#eee',
          height: '24px',
          span: {
            backgroundColor: '#2874A6',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiDrawer-paper': {
            width: '100%',
          },
        },
      },
    },
  },
});

export default theme;

declare module '@mui/material/styles' {
  interface Palette {
    light: Palette['primary'];
  }
  interface PaletteOptions {
    light?: PaletteOptions['primary'];
  }
}
