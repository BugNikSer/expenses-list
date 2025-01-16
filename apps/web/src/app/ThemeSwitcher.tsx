'use client';

import { useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ContrastIcon from '@mui/icons-material/Contrast';

type TMode = 'light' | 'dark' | 'system'

const ThemeSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { mode, setMode } = useColorScheme();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (m: TMode) => {
    setMode(m);
    setAnchorEl(null);
  };

  const CurrentModeIcon = mode === 'light'
    ? LightModeIcon
    : mode === 'dark'
      ? DarkModeIcon
      : ContrastIcon

  if (!mode) {
    return null;
  }
  return (
    <>
      <IconButton color="inherit" size='small' onClick={handleClick}>
        <CurrentModeIcon/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem disabled={true}>
          Тема
        </MenuItem>
        <MenuItem onClick={() => handleSelect('system')}>
          <ListItemIcon>
            <ContrastIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Системная</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSelect('light')}>
          <ListItemIcon>
            <LightModeIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Светлая</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSelect('dark')}>
          <ListItemIcon>
            <DarkModeIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Тёмная</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
};

export default ThemeSwitcher;
