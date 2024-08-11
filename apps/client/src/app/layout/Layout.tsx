import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="grid h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]">
        <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6 max-h-screen overflow-hidden overflow-y-auto"
        style={{maxHeight: 'calc(100vh - 60px)'}}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

