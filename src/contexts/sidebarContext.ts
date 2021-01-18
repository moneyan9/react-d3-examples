import { createContext } from 'react';

export interface SidebarContextType {
  sidebarFloating: boolean;
  setSidebarFloat: (value: boolean) => void;
}

const initialSidebarContext: SidebarContextType = {
  sidebarFloating: false,
  setSidebarFloat: () => {
    //do nothing
  },
};

export const SidebarContext = createContext<SidebarContextType>(initialSidebarContext);
