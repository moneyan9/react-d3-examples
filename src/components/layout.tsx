import Head from 'next/head';
import { useState } from 'react';
import { SidebarContainer } from 'src/components/sidebar-container';
import { SidebarContext } from 'src/contexts/sidebarContext';

import { Header } from './header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarFloating, setSidebarFloat] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>React D3.js Examples</title>
      </Head>

      <SidebarContext.Provider value={{ sidebarFloating, setSidebarFloat }}>
        <div className="layout-container">
          {!sidebarFloating && (
            <div className="sidebar">
              <SidebarContainer />
            </div>
          )}
          <div className="content">
            <div className="header">
              <Header />
            </div>
            <div className="article">{children}</div>
          </div>
        </div>
      </SidebarContext.Provider>

      <style jsx>{`
        .layout-container {
          display: flex;
          flex-direction: row;
        }
        .sidebar {
          min-width: 280px;
          height: 100vh;
          background-color: #f7f6f3;
        }
        .content {
          width: 100%;
        }
        .header {
        }
        .article {
          max-width: 80%;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #666;
          font-family: -apple-system, 'Segoe UI';
        }
      `}</style>
    </>
  );
};
