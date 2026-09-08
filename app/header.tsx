import Nav from './nav';
import { getSetting } from './queries/getSetting';

export default async function Header() {
  const settings = getSetting(); // mengembalikan 'Objek Promise' alih-alih 'isi variable'

  return (
    <header className="bg-white px-6 py-2 font-bold text-black">
      <div className="flex justify-between">
        {/*<div>{settings.siteName}</div>*/}
        <Nav settingPromise={settings} />
      </div>
    </header>
  );
}
