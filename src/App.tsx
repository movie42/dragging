import styled from "styled-components";
import { Box, Draggable } from "./Components";
import DraggableContextProvider from "./Context/DraggableContextProvider";

function App() {
  return (
    <Container>
      <DraggableContextProvider>
        <Draggable>
          <Box />
        </Draggable>
      </DraggableContextProvider>
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
