import { useCallback, useState } from 'react'

export const useActiveStep = () => {
  const [activeStep, setActiveStep] = useState(0)

  const back = useCallback(() => setActiveStep((prev) => prev - 1), [])
  const next = useCallback(() => setActiveStep((prev) => prev + 1), [])
  const reset = useCallback(() => setActiveStep(0), [])

  return { activeStep, back, next, reset }
}
