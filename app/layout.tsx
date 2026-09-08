import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Header from './header';
import { getSetting } from './queries/getSetting';

const fontSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const fontMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const setting = await getSetting();

  return {
    title: {
      template: `%s | ${setting.siteName}`,
      default: 'Untitled',
    },
    description: 'My Mine Website',
  };
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
