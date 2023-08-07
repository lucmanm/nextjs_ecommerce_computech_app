import React, { createContext, useContext, useState } from 'react'

const StateSidebarContext = createContext(null);

const SidebarContext = ({children} : {children : React.ReactNode}) => 
{
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StateSidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </StateSidebarContext.Provider>
  );
};
export const useStateSidebarContext = () => useContext(StateSidebarContext);