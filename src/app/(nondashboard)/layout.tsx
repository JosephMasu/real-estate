// src/app/(nondashboard)/layout.tsx
import React from 'react';
import { NAVBAR_HEIGHT } from '@/lib/constants';
import NavBar from '@/components/ui/NavBar';

export default function NonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <NavBar />
      <main
        className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}
        style={{paddingTop: `${NAVBAR_HEIGHT}px`}}
      >
        {children}
      </main>
    </div>
  );
}
