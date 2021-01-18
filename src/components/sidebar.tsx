import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Link from 'next/link';
import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/sidebarContext';

export const Sidebar = () => {
  const { sidebarFloating, setSidebarFloat } = useContext(SidebarContext);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="title">
            <Link href="/">
              <a>React D3.js Examples</a>
            </Link>
          </div>
          <div
            className="close-sidebar"
            onClick={() => {
              return setSidebarFloat(true);
            }}
          >
            {!sidebarFloating && <MenuOpenIcon />}
          </div>
        </div>
        <div className="sidebar-nav">
          <div>
            <Link href="/example-1">
              <a>Creating SVG elements</a>
            </Link>
          </div>
          <div>
            <Link href="/example-2">
              <a>Bar Chart</a>
            </Link>
          </div>
          <div>
            <Link href="/example-3">
              <a>Gantt Chart</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sidebar {
          width: 100%;
          height: 100%;
        }
        .sidebar-header {
          width: 100%;
          height: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .sidebar-nav {
          width: 100%;
          height: 100%;
          padding: 0 0.4em;
        }
        .title {
          flex: 1 1 auto;
          font-style: oblique;
        }
        .close-sidebar {
          flex: 0 1 24px;
          display: none;
        }
        .sidebar:hover .close-sidebar {
          display: inline-block;
        }
        a {
          color: #666;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
