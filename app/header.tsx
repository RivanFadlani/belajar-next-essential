import Link from 'next/link';
import { getSetting } from './types/queries/getSetting';

export default async function Header() {
  const settings = await getSetting();

  console.log(settings);

  return (
    <header className="bg-white px-6 py-2 font-bold text-black">
      <div className="flex justify-between">
        <div>{settings.siteName}</div>
        <nav className="flex gap-3 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Post</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
