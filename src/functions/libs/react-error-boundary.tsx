import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  return (
    <div>
      <h1>エラーが発生しました</h1>
      <p>ご不便をおかけしますが、アドレスをご確認いただくか、</p>
      <p>トップ画面へ戻り本サービスをご利用ください。</p>
      <div>
        <a href="/">トップページへ戻る</a>
        <button type="button" onClick={resetErrorBoundary}>
          もう一度試す
        </button>
      </div>
    </div>
  )
}
