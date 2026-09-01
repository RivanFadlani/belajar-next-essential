// taruh file ini selevel dengan folder (route) yang ingin diberikan layout yang sama
// sama: layout.tsx ini

import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-blue-500 px-6 py-2 font-medium text-white">
        Ceritanya Dashboard Nav
      </header>
      {children}
    </>
  );
}
