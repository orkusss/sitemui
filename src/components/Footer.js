import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 

function Footer() {
  const theme = useTheme(); 

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.200', 
        py: 3,
        textAlign: 'center',
        color: theme.palette.text.primary, 
      }}
    >
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} Сайт о Микроразметке. Все права защищены.
      </Typography>
    </Box>
  );
}

export default Footer;