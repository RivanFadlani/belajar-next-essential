import type { Metadata } from 'next';
// SSR / Server Component
// 1) Pakai server component untuk menggunakan fitur seperti 'data fetching'

import Image from 'next/image';
import pixelImg from './../public/asftu.png';
import Counter from './counter';

export const metadata: Metadata = {
  title: 'Welcome Page',
};

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Counter />

      {/* <div className="h-screen"></div> */}
      {/* <div className="h-screen"></div> */}
      {/* <div className="h-screen"></div> */}
      {/* <div className="h-screen"></div> */}

      <h2 className="mt-6">NextJS Image With External Link</h2>
      {/* The parent element must assign position: "relative", "fixed", "absolute". */}
      <div className="relative h-36 w-96 overflow-hidden rounded-lg">
        {/* By default, the <img> element uses position: "absolute". */}
        {/* untuk menampilkan image via external link, kita perlu config di 'next.config.mjs' */}
        <Image
          src={
            'https://plus.unsplash.com/premium_photo-1722593856418-05d6d47eec59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphcGFufGVufDB8fDB8fHww'
          }
          alt="japan"
          // width={500}
          // height={500}
          fill
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADBAMAAACpGNjLAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAwUExURYhiYZRpZZtlXptkXp5mXmBmakk9QFBGSVdMVVRIUG13dFxfV2doZ5aVoIWCjP///9QOv38AAAABYktHRA8YugDZAAAAB3RJTUUH6gkBDxk1CEi9VgAAABRJREFUCNdjYFR2YAirmMCw+uwDABAqBBvdoet1AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI2LTA5LTAxVDE1OjI1OjQ2KzAwOjAw17krHgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNi0wOS0wMVQxNToyNTo0NiswMDowMKbkk6IAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjYtMDktMDFUMTU6MjU6NTMrMDA6MDBvY51EAAAAAElFTkSuQmCC"
        />
      </div>

      <h2>NextJS Image Via Import</h2>
      <div className="relative h-36 w-96 overflow-hidden rounded-lg">
        <Image
          src={pixelImg}
          alt="asftu"
          fill
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADBAMAAACpGNjLAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAwUExURYhiYZRpZZtlXptkXp5mXmBmakk9QFBGSVdMVVRIUG13dFxfV2doZ5aVoIWCjP///9QOv38AAAABYktHRA8YugDZAAAAB3RJTUUH6gkBDxk1CEi9VgAAABRJREFUCNdjYFR2YAirmMCw+uwDABAqBBvdoet1AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI2LTA5LTAxVDE1OjI1OjQ2KzAwOjAw17krHgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNi0wOS0wMVQxNToyNTo0NiswMDowMKbkk6IAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjYtMDktMDFUMTU6MjU6NTMrMDA6MDBvY51EAAAAAElFTkSuQmCC"
        />
      </div>
    </div>
  );
}
