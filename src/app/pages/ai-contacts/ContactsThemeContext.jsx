'use client';

import { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ContactsThemeContext = createContext();

export const useContactsTheme = () => useContext(ContactsThemeContext);

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    secondary: {
      main: '#e1bee7',
    },
    background: {
      default: '#f3e5f5',
      paper: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    secondary: {
      main: '#66bb6a',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
});

export function ContactsThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ContactsThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ContactsThemeContext.Provider>
  );
}
