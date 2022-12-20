import React, { useState } from "react";
import styled from "styled-components";
import { Box, Draggable } from "./Components";

function App() {
  return (
    <Container>
      <Draggable>
        <Box />
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
