import { Head } from '@/components/layouts'
import { Home as HomeTemplate } from '@/features/home/Home'

export const Home: React.FC = () => {
  return (
    <>
      <Head title="home" />
      <HomeTemplate />
    </>
  )
}
