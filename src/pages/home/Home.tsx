import { Head } from '@/components'
import { Home as HomeTemplate } from '@/features/home/Home'

export const Home: React.FC = () => {
  return (
    <>
      <Head title="home" />
      <HomeTemplate />
    </>
  )
}
