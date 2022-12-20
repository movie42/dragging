import React, { useState } from "react";

type MouseEvetFunction = (e: React.MouseEvent<HTMLDivElement>) => void;
type CommonFunction = () => void;

export interface Offset {
  x: null | number;
  y: null | number;
}

export interface UseDraggingReturn {
  boxOffset: Offset;
  handleMouseCurrentPosition: MouseEvetFunction;
  handleDragableItemCurrentPosition: MouseEvetFunction;
  handleItemDraggingStart: CommonFunction;
  handleItemDraggingEnd: CommonFunction;
}

const useDragging = (): UseDraggingReturn => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Offset>({ x: null, y: null });
  const [boxOffset, setBoxOffset] = useState<Offset>({ x: null, y: null });
  const handleMouseCurrentPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    const target = e.currentTarget;
    let offsetX = e.clientX - target.getBoundingClientRect().left;
    let offsetY = e.clientY - target.getBoundingClientRect().top;
    setOffset({ x: offsetX, y: offsetY });
  };
  const handleDragableItemCurrentPosition = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging) {
      return;
    }
    if (offset.x && offset.y) {
      let offsetX = offset.x - e.currentTarget.clientWidth / 2;
      let offsetY = offset.y - e.currentTarget.clientHeight / 2;
      setBoxOffset({ x: offsetX, y: offsetY });
    }
  };

  const handleItemDraggingStart = () => {
    setIsDragging(true);
  };

  const handleItemDraggingEnd = () => {
    setIsDragging(false);
  };

  return {
    boxOffset,
    handleMouseCurrentPosition,
    handleDragableItemCurrentPosition,
    handleItemDraggingStart,
    handleItemDraggingEnd
  };
};

export default useDragging;
