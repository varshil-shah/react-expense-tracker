import React from "react";

import styled from "styled-components";

import { ExpenseContextProvider } from "./context/ExpenseContext";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import NewExpense from "./components/NewExpense/NewExpense";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const App = () => {
  return (
    <ExpenseContextProvider>
      <Wrapper>
        <NewExpense />
        <ExpenseTracker />
      </Wrapper>
    </ExpenseContextProvider>
  );
};

export default App;
