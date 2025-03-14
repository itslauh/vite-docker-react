import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {theme} from "./theme.ts"
import { MantineThemeProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineThemeProvider theme={theme}>
      <App />
    </MantineThemeProvider>
  </StrictMode>,
)
