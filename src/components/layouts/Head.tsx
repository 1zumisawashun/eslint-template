import { Helmet } from 'react-helmet-async'
import ReactIcon from '@/assets/react.svg'

type HeadProps = {
  title?: string
  description?: string
}

export const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet title={title} defaultTitle="eslint-template">
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="eslint-template" />
      <meta property="og:image" content={ReactIcon} />
      <meta property="og:locale" content="ja_JP" />
    </Helmet>
  )
}
