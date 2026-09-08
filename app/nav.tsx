import Link from 'next/link';
import { use } from 'react';
import { Setting } from './types/Setting';

export default function Nav({
  settingPromise,
}: {
  settingPromise: Promise<Setting>;
}) {
  const setting = use(settingPromise);

  console.log('Hola!', setting);

  return (
    <nav className="flex gap-3 font-medium">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Post</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
