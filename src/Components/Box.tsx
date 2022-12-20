import React from "react";
import styled from "styled-components";
import { useDragContext } from "../Context/DraggableContextProvider";
import { Offset } from "../hooks/useDragging";

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box = (props: BoxProps) => {
  const {
    boxOffset,
    handleItemDraggingEnd,
    handleItemDraggingStart,
    handleDragableItemCurrentPosition
  } = useDragContext();
  return (
    <Container
      boxOffset={boxOffset}
      onMouseDown={handleItemDraggingStart}
      onMouseUp={handleItemDraggingEnd}
      onMouseMove={handleDragableItemCurrentPosition}
      {...props}
    />
  );
};

export default Box;

const Container = styled.div<{ boxOffset: Offset }>`
  display: inline-block;
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-color: blue;
  color: #fff;
  padding: 1rem;
  margin: 0.2rem 0;
  transform: ${({ boxOffset: { x, y } }) =>
    x && y && `translate3d(${x}px, ${y}px, 0)`};
`;
