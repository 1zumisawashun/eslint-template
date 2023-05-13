import { useCallback } from 'react'

export const useNavigate = () => {
  const navigate = useCallback((url: string) => {
    window.location.href = url
  }, [])

  return { navigate }
}
