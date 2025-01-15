'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  // palette: { mode: 'dark' }, TODO: get from localStorage
  cssVariables: true,
});

export default theme;
