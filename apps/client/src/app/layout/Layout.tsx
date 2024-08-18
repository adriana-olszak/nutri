import React, {useCallback} from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import { Header } from './Header';
import { useLocalstorageState } from 'rooks';

export const Layout = () => {
  const [sidebarWidth, setSidebarWidth] = useLocalstorageState("balanced-bite:sidebar-width", 200);
  const handleMouseMove = useCallback((e) => {
    const newWidth = e.clientX;
    if (newWidth >= 80 && newWidth <= 200) {
      setSidebarWidth(newWidth);
    }
  }, [setSidebarWidth]);
  const handleMouseDown = useCallback(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  return (
    <div className="flex h-screen w-full">
      <div style={{width: sidebarWidth, minWidth: 80, maxWidth: 200}}>
        <Sidebar width={sidebarWidth}/>
        <div
          className="w-1 bg-gray-300 cursor-col-resize"
          onMouseDown={handleMouseDown}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <Header/>
        <main
          className="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6 overflow-hidden overflow-y-auto"
          style={{
            maxHeight: 'calc(100vh - 60px)',
            width: `calc(100vw - ${sidebarWidth}px)`
          }}
        >
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

