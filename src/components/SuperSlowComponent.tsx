export const SuperSlowComponent = () => {
  // コメントアウトを追加する
  const now = performance.now()
  /* eslint-disable */
  while (performance.now() - now < 200) {}
  return <div>Super slow component</div>
}
