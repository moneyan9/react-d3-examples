import { Sidebar } from 'src/components/sidebar';

export const SidebarContainer = () => {
  return (
    <>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <style jsx>{`
        .sidebar-container {
          padding: 0 0.8em;
          height: 100%;
        }
      `}</style>
    </>
  );
};
