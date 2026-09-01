// CSR / Client Component
// 1) Pakai client component untuk menggunakan fitur interaktif react
'use client';

import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}
