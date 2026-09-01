import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-blue-500 px-6 py-2 font-medium text-white">
        Ceritanya Navbar Admin
      </header>
      {children}
    </>
  );
}
