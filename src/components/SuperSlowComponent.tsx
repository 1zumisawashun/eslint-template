export const SuperSlowComponent = () => {
  // コメントアウトを追加する
  // さらにコメントアウトを追加する
  // 追加でコメントアウト
  const now = performance.now()
  /* eslint-disable */
  while (performance.now() - now < 200) {}
  return <div>Super slow component</div>
}
