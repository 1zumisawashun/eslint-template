import { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routers/app'

export const AppProvider: React.FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Suspense>
  )
}
