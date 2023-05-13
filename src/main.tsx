import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { AppProvider } from './providers/app'
import { AppRoutes } from './routers/app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
)
