import React from 'react';
import TodoList from './components/TodoList';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #666666;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
};

export default App;
