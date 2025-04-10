import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 
import { ListItemButton } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Sidebar({ open, handleDrawerClose }) {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/blog">
            <ListItemText primary="Блог" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="О микроразметке" />
          </ListItemButton>
        </ListItem>
          <ListItem disablePadding>
              <ListItemButton component={Link} to="/examples">
                  <ListItemText primary="Примеры" />
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
    <ListItemButton component={Link} to="/types">
        <ListItemText primary="Типы микроразметки" />
    </ListItemButton>
</ListItem>
<ListItem disablePadding>
    <ListItemButton component={Link} to="/tools">
        <ListItemText primary="Инструменты" />
    </ListItemButton>
</ListItem>
    <ListItem disablePadding>
        <ListItemButton component={Link} to="/faq">
            <ListItemText primary="FAQ" />
        </ListItemButton>
    </ListItem>
<ListItem disablePadding>
    <ListItemButton component={Link} to="/contact">
        <ListItemText primary="Контакты" />
    </ListItemButton>
</ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;