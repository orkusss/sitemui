import React, { useState, useMemo, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage'; 
import BlogPostPage from './pages/BlogPostPage';
import ExamplesPage from './pages/ExamplesPage';
import TypesPage from './pages/TypesPage';
import ToolsPage from './pages/ToolsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
    marginTop: theme.mixins.toolbar.minHeight, 
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.mixins.toolbar.minHeight, 
    },
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode, 
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          text: {
            primary: mode === 'dark' ? '#e0e0e0' : '#212121', 
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#424242' : '#f5f5f5', 
                color: mode === 'dark' ? '#fff' : '#000',  
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#303030' : '#fff', 
                color: mode === 'dark' ? '#fff' : '#000', 
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                fontFamily: 'Century Gothic, sans-serif', 
                color: mode === 'dark' ? '#fff' : '#000',
              },
            },
          },
        },
        typography: {
          fontFamily: 'Century Gothic, sans-serif', 
          color: mode === 'dark' ? '#fff' : '#000', 
        },
      }),
    [mode], 

  );

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const [open, setOpen] = useState(false); 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            toggleTheme={toggleTheme}
            Brightness4Icon={Brightness4Icon}
            Brightness7Icon={Brightness7Icon}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }} 
            >
              <MenuIcon />
            </IconButton>
          </Header>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
            <Main open={open}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/examples" element={<ExamplesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/types" element={<TypesPage />} />
<Route path="/tools" element={<ToolsPage />} />
<Route path="/faq" element={<FAQPage />} />
<Route path="/contact" element={<ContactPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
              </Routes>
            </Main>
          </Box>
          <Footer />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;