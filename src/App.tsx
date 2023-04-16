import { useState } from 'react'
import { FilterButton } from './components/FilterButton'

const App = () => {
  const [activeStep, setActiveStep] = useState(0)
  const handleBack = () => setActiveStep((prev) => prev - 1)
  const handleNext = () => setActiveStep((prev) => prev + 1)
  return <div>test</div>
}

export default App
