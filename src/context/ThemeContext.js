import { createContext, useState, useEffect, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const ThemeContext = createContext({
  mode: 'light',
  toggleMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('themeMode');
    return storedMode || 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: 'Century Gothic, sans-serif',
        },
      }),
    [mode],
  );

  const value = { mode, toggleMode, theme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};