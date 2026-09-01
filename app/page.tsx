// SSR / Server Component
// 1) Pakai server component untuk menggunakan fitur seperti 'data fetching'

import Image from 'next/image';
import pixelImg from './../public/asftu.png';
import Counter from './counter';

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Counter />

      <h2 className="mt-6">NextJS Image With External Link</h2>
      <Image
        src={
          'https://plus.unsplash.com/premium_photo-1722593856418-05d6d47eec59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphcGFufGVufDB8fDB8fHww'
        }
        alt="japan"
        width={500}
        height={500}
      />

      <h2>NextJS Image Via Import</h2>
      <Image src={pixelImg} alt="asftu" />
    </div>
  );
}
