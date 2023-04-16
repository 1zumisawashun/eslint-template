export default function SuperSlowComponent() {
  const now = performance.now();
  while (performance.now() - now < 200) {}
  return <div>Super slow component</div>;
}
