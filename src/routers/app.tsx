import { ErrorBoundary } from 'react-error-boundary'
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet
} from 'react-router-dom'
import { lazyImport } from '@/functions/helpers'
import { ErrorFallback } from '@/components'

const { Catalog } = lazyImport(
  () => import('../pages/catalog/Catalog'),
  'Catalog'
)
const { Home } = lazyImport(() => import('../pages/home/Home'), 'Home')

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}

export const children = () => {
  const isLocalhost = document.location.hostname === 'localhost'

  const catalogRoutes = isLocalhost
    ? [{ path: '/catalog', element: <Catalog /> }]
    : []

  const publicRoutes = [{ path: '/', element: <Home /> }]

  return [...catalogRoutes, ...publicRoutes]
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: children()
  }
])
