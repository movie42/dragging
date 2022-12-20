import React, { useState } from "react";

type MouseEvetFunction = (e: React.MouseEvent<HTMLDivElement>) => void;
type CommonFunction = () => void;

interface Offset {
  x: null | number;
  y: null | number;
}

export interface useDraggingReturn {
  boxOffset: Offset;
  onMouseMove: MouseEvetFunction;
  onBoxMove: MouseEvetFunction;
  onMouseDown: CommonFunction;
  onMouseUp: CommonFunction;
}

const useDragging = (): useDraggingReturn => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Offset>({ x: null, y: null });
  const [boxOffset, setBoxOffset] = useState<Offset>({ x: null, y: null });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    const target = e.currentTarget;
    let offsetX = e.clientX - target.getBoundingClientRect().left;
    let offsetY = e.clientY - target.getBoundingClientRect().top;
    setOffset({ x: offsetX, y: offsetY });
  };
  const onBoxMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    if (offset.x && offset.y) {
      let offsetX = offset.x - e.currentTarget.clientWidth / 2;
      let offsetY = offset.y - e.currentTarget.clientHeight / 2;
      setBoxOffset({ x: offsetX, y: offsetY });
    }
    setBoxOffset((pre) => ({ ...pre, x: 0 }));
  };

  const onMouseDown = () => {
    setIsDragging(true);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return {
    boxOffset,
    onMouseMove,
    onBoxMove,
    onMouseDown,
    onMouseUp
  };
};

export default useDragging;
