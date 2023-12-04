import {memo} from 'react';
import {IconButton, IconButtonProps, useColorScheme} from '@mui/joy';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

export const ThemeToggleButton = memo((props: IconButtonProps) => {
  const {mode, setMode} = useColorScheme();

  return (
    <IconButton
      title="Toggle theme"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
      {...props}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
});
