import { Head } from '@/components/layouts'
import { Catalog as CatalogTemplate } from '@/components/templates/Catalog'

export const Catalog: React.FC = () => {
  return (
    <>
      <Head title="catalog" />
      <CatalogTemplate />
    </>
  )
}
