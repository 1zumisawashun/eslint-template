import { useRoutes } from 'react-router-dom'
import { lazyImport } from '../functions/helpers'
import { useBoolean } from '../functions/hooks'

const { Catalog } = lazyImport(() => import('../pages/Catalog'), 'Catalog')

export const AppRoutes = () => {
  const { isLocalhost } = useBoolean()

  const catalogRoutes = isLocalhost
    ? [{ path: '/catalog', element: <Catalog /> }]
    : []

  const element = useRoutes([...catalogRoutes])

  return element
}
