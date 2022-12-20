import React, { useState } from "react";
import styled from "styled-components";
import { Box, Draggable } from "./Components";

interface Offset {
  x: null | number;
  y: null | number;
}

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Offset>({ x: null, y: null });
  const [boxOffset, setBoxOffset] = useState<Offset>({ x: null, y: null });
  const onMouseDown = () => {
    setIsDragging(true);
  };
  const onMouseUp = () => {
    setIsDragging(false);
  };
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
  };

  return (
    <Container>
      <Draggable onMouseMove={onMouseMove}>
        <Box
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onBoxMove}
          style={{
            transform: `translate3d(${boxOffset.x}px, ${boxOffset.y}px, 0)`
          }}
        />
      </Draggable>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
