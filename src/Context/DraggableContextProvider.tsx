import React, { createContext, ReactNode, useContext } from "react";
import useDragging, { useDraggingReturn } from "../hooks/useDragging";

const DraggableContext = createContext<useDraggingReturn>(null!);

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
