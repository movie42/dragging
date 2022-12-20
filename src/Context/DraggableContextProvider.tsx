import React, { createContext, ReactNode, useContext } from "react";
import useDragging, { UseDraggingReturn } from "../hooks/useDragging";

const DraggableContext = createContext<UseDraggingReturn>(null!);

interface DraggableContextProps {
  children: ReactNode;
}

export const useDragContext = () => useContext(DraggableContext);

const DraggableContextProvider = ({ children }: DraggableContextProps) => {
  const value = useDragging();
  return (
    <DraggableContext.Provider value={value}>
      {children}
    </DraggableContext.Provider>
  );
};

export default DraggableContextProvider;
