// SSR / Server Component
// 1) Pakai server component untuk menggunakan fitur seperti 'data fetching'

import Counter from './counter';

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Counter />
    </div>
  );
}
