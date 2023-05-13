import { useMemo } from 'react'

export const useBoolean = () => {
  const isLocalhost = useMemo(() => {
    return document.location.hostname === 'localhost'
  }, [])

  const isSp = useMemo(() => {
    return window.innerWidth <= 576
  }, [])

  return { isLocalhost, isSp }
}
