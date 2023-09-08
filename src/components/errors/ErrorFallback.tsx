import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  return <div>error-fallback</div>
}
