import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'

function Root() {
  return (
    <>
      <CssBaseline />
      <App />
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
