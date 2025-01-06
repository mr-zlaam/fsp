import { StrictMode } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './router/routes.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider defaultTheme="dark" storageKey="theme">

      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
)
