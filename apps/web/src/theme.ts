'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  // palette: { mode: 'dark' }, TODO: get from localStorage
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  colorSchemes: {
    dark: true,
    light: true,
  },
});

export default theme;
