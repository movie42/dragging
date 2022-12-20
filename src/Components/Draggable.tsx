import React, { ReactNode } from "react";
import styled from "styled-components";
import { useDragContext } from "../Context/DraggableContextProvider";

interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Draggable = ({ children, ...props }: DraggableProps) => {
  const { handleMouseCurrentPosition } = useDragContext();
  return (
    <Container onMouseMove={handleMouseCurrentPosition} {...props}>
      {children}
    </Container>
  );
};

export default Draggable;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 20rem;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 1rem;
  overflow: hidden;
`;
