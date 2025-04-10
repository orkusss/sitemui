import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Header({ open, handleDrawerOpen, toggleTheme }) {
  const theme = useTheme();
  const icon = theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Использование Микроразметки
        </Typography>
        <Button color="inherit" component={Link} to="/">Главная</Button>
        <Button color="inherit" component={Link} to="/about">О микроразметке</Button>
        <Button color="inherit" component={Link} to="/examples">Примеры</Button>
        <Button color="inherit" component={Link} to="/blog">Блог</Button>
        <Button color="inherit" component={Link} to="/types">Типы</Button>
<Button color="inherit" component={Link} to="/tools">Инструменты</Button>
<Button color="inherit" component={Link} to="/faq">FAQ</Button>
<Button color="inherit" component={Link} to="/contact">Контакты</Button>
        <IconButton onClick={toggleTheme} color="inherit">
          {icon}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;